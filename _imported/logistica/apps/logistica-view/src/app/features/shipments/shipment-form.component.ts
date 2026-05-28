import { ChangeDetectionStrategy, Component, OnInit, inject, signal, output, DestroyRef, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { SelectModule } from 'primeng/select';
import { PopoverModule } from 'primeng/popover';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextarea } from 'primeng/inputtextarea';
import { FleetService, StaffService, ConfigService, ShipmentsService } from '../../core/services/logistics.service';
import { Unit, Collaborator, Destination } from '../../core/models/logistics.models';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { LaborAssignmentComponent } from '../../shared/components/labor-assignment/labor-assignment.component';
import { FormFieldComponent } from '../../shared/components/form-field/form-field.component';
import { animate } from 'motion';
import { MessageService, ConfirmationService } from 'primeng/api';



@Component({
  selector: 'app-shipment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    AutoCompleteModule,
    DropdownModule,
    SelectModule,
    CalendarModule,
    CheckboxModule,
    InputTextarea,
    PopoverModule,
    IconComponent,
    LaborAssignmentComponent,
    FormFieldComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './shipment-form.component.html'
})
export class ShipmentFormComponent implements OnInit, AfterViewInit {
  saved = output<any>();
  canceled = output<void>();

  private fb = inject(FormBuilder);
  private fleetService = inject(FleetService);
  private staffService = inject(StaffService);
  private configService = inject(ConfigService);
  private shipmentsService = inject(ShipmentsService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  private destroyRef = inject(DestroyRef);

  shipmentForm: FormGroup;
  units = signal<Unit[]>([]);
  operators = signal<Collaborator[]>([]);
  cargadores_catalogo = signal<Collaborator[]>([]);
  destinations = signal<Destination[]>([]);

  // Opciones de dropdowns (readonly para evitar recreación en cada change detection)
  readonly estadoOptions = [
    { label: 'Programado (Listo para carga)', value: 'programado' },
    { label: 'En Tránsito (Viaje activo)', value: 'transito' },
    { label: 'Completado (Entrega exitosa)', value: 'completado' },
    { label: 'Cancelado (Operación suspendida)', value: 'cancelado' }
  ];

  readonly tipoOptions = [
    { label: 'Entrega a Cliente (Facturado)', value: 'entrega' },
    { label: 'Traspaso (Entre Almacenes)', value: 'traspaso' },
    { label: 'Recolección (Retorno de carga)', value: 'recoleccion' }
  ];

  // Flags para secciones condicionales (signals para OnPush)
  tieneRegreso = signal(false);
  tieneLAB = signal(false);
  submitAttempted = signal(false);
  saving = signal(false);
  showAbout = signal(false);
  submitError = signal<string | null>(null);

  constructor() {
    // Generar folio automático
    const folioGenerado = `EMB-${Date.now().toString().slice(-6)}`;

    this.shipmentForm = this.fb.group({
      // Datos Generales
      folio: [folioGenerado, Validators.required],
      fecha: [new Date(), Validators.required],
      unidad_id: ['', Validators.required],
      operador_id: ['', Validators.required],
      origen: ['', Validators.required],
      destino_id: ['', Validators.required],
      destino_texto: [''],
      km: [{ value: 0, disabled: true }, [Validators.min(0)]],
      flete: [{ value: 0, disabled: true }, [Validators.min(0)]],
      valor_carga: [0],
      cajas: [0],
      peso: [0],
      tipo: ['entrega'],
      estado: ['programado'],
      obs: [''],

      // Carga de Salida
      carga: this.fb.array([]),

      // Descarga de Regreso
      tiene_regreso: [false],
      cajas_regreso: [0],
      flete_regreso: [0],
      origen_regreso: [''],
      descargadores_regreso: this.fb.array([]),

      // Maniobras LAB
      tiene_lab: [false],
      monto_lab: [0],
      empresa_lab: [''],
      descargadores_lab: this.fb.array([])
    });
  }

  get carga(): FormArray {
    return this.shipmentForm.get('carga') as FormArray;
  }

  get descargadoresRegreso(): FormArray {
    return this.shipmentForm.get('descargadores_regreso') as FormArray;
  }

  get descargadoresLab(): FormArray {
    return this.shipmentForm.get('descargadores_lab') as FormArray;
  }

  // Totales calculados
  get totalCarga(): number {
    return this.carga.controls.reduce((sum, ctrl) => sum + (ctrl.get('tarifa')?.value || 0), 0);
  }

  get costoDescargaRegreso(): number {
    return (this.shipmentForm.get('cajas_regreso')?.value || 0) * 1; // $1 por caja
  }

  get repartoRegresoPorPersona(): number {
    const total = this.costoDescargaRegreso;
    const count = this.descargadoresRegreso.length;
    return count > 0 ? total / count : 0;
  }

  get repartoLabPorPersona(): number {
    const total = this.montoLab;
    const count = this.descargadoresLab.length;
    return count > 0 ? total / count : 0;
  }

  get ingresoTotal(): number {
    return (this.shipmentForm.get('flete')?.value || 0) + (this.shipmentForm.get('flete_regreso')?.value || 0);
  }

  get costosTotales(): number {
    return this.totalCarga + this.costoDescargaRegreso + this.montoLab;
  }

  get margenEstimado(): number {
    return this.ingresoTotal - this.costosTotales;
  }

  get montoLab(): number {
    return this.shipmentForm.get('monto_lab')?.value || 0;
  }

  // Factor aplicado (calculado)
  get factorAplicado(): string {
    const destinoId = this.shipmentForm.get('destino_id')?.value;
    if (!destinoId) return '0';
    
    const destino = this.destinations().find((d: any) => d.id === destinoId);
    if (!destino || !destino.km) return '1.00';
    
    return destino.km > 300 ? '1.30' : '1.00';
  }

  isInvalid(controlName: string): boolean {
    const control = this.shipmentForm.get(controlName);
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || this.submitAttempted());
  }

  addCargador() {
    this.carga.push(this.fb.group({
      colaborador_id: ['', Validators.required],
      tarifa: [30, [Validators.required, Validators.min(0)]]
    }));
  }

  removeCargador(index: number) {
    this.carga.removeAt(index);
  }

  addDescargadorRegreso() {
    this.descargadoresRegreso.push(this.fb.group({
      colaborador_id: ['', Validators.required]
    }));
  }

  removeDescargadorRegreso(index: number) {
    this.descargadoresRegreso.removeAt(index);
  }

  addDescargadorLab() {
    this.descargadoresLab.push(this.fb.group({
      colaborador_id: ['', Validators.required]
    }));
  }

  removeDescargadorLab(index: number) {
    this.descargadoresLab.removeAt(index);
  }

  onToggleRegreso() {
    this.tieneRegreso.set(this.shipmentForm.get('tiene_regreso')?.value ?? false);
    if (this.tieneRegreso() && this.descargadoresRegreso.length === 0) {
      // Agregar chofer y ayudantes por defecto
      this.addDescargadorRegreso();
    }
  }

  onToggleLAB() {
    this.tieneLAB.set(this.shipmentForm.get('tiene_lab')?.value ?? false);
    if (this.tieneLAB() && this.descargadoresLab.length === 0) {
      this.addDescargadorLab();
    }
  }

  ngOnInit(): void {
    this.loadCatalogs();

    // Función para calcular km y flete automáticamente
    const calcularKmYflete = () => {
      const destinoId = this.shipmentForm.get('destino_id')?.value;
      const origen = this.shipmentForm.get('origen')?.value;

      if (!destinoId || !origen) {
        this.shipmentForm.patchValue({ km: 0, flete: 0 }, { emitEvent: false });
        return;
      }

      const destino = this.destinations().find((d: Destination) => d.id === destinoId);

      if (!destino) {
        this.shipmentForm.patchValue({ km: 0, flete: 0 }, { emitEvent: false });
        return;
      }

      // Calcular km (ida y vuelta)
      let km = 0;
      if (origen && origen === destino.nombre) {
        km = 0;
      } else if (destino.km) {
        km = destino.km * 2; // Ida y vuelta
      }

      // Calcular flete basado en regla de factor
      let flete = 0;
      if (km > 0) {
        const kmOneWay = destino.km || 0; // km de ida (sin retorno)
        // Factor predeterminado es 1, si > 300km se suma $0.30
        const factor = kmOneWay > 300 ? 1.30 : 1.00;
        flete = km * factor;
      }

      this.shipmentForm.patchValue({ km, flete }, { emitEvent: false });
    };

    // Calcular km y flete automáticamente cuando cambia el destino
    this.shipmentForm.get('destino_id')?.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => calcularKmYflete());

    // Calcular km y flete automáticamente cuando cambia el origen
    this.shipmentForm.get('origen')?.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => calcularKmYflete());
  }

  ngAfterViewInit(): void {
    // Animación de entrada del formulario
    animate('.card-premium', {
      opacity: [0, 1],
      y: [20, 0]
    }, {
      duration: 0.5,
      delay: 0.1
    });
  }

  loadCatalogs() {
    this.fleetService.findAll().subscribe(data => this.units.set(data));
    this.staffService.findAll().subscribe(data => {
      this.operators.set(data.filter(c => c.roles?.includes('chofer')));
      this.cargadores_catalogo.set(data.filter(c =>
        c.roles?.includes('cargador') || c.roles?.includes('ayudante') || c.roles?.includes('chofer')
      ));
    });
    this.configService.getDestinos().subscribe(data => this.destinations.set(data));
  }

  resetForm() {
    const folioGenerado = `EMB-${Date.now().toString().slice(-6)}`;
    this.shipmentForm.reset({
      folio: folioGenerado,
      fecha: new Date(),
      unidad_id: '',
      operador_id: '',
      origen: '',
      destino_id: '',
      destino_texto: '',
      km: 0,
      flete: 0,
      valor_carga: 0,
      cajas: 0,
      peso: 0,
      tipo: 'entrega',
      estado: 'programado',
      obs: '',
      carga: [],
      tiene_regreso: false,
      cajas_regreso: 0,
      flete_regreso: 0,
      origen_regreso: '',
      descargadores_regreso: [],
      tiene_lab: false,
      monto_lab: 0,
      empresa_lab: '',
      descargadores_lab: []
    });
    this.submitAttempted.set(false);
    this.submitError.set(null);
  }

  onSubmit() {
    this.submitAttempted.set(true);
    this.submitError.set(null);
    this.shipmentForm.markAllAsTouched();

    if (this.shipmentForm.invalid || this.saving()) {
      this.messageService.add({ 
        severity: 'warn', 
        summary: 'Atención', 
        detail: 'Por favor, completa todos los campos obligatorios resaltados en rojo.',
        life: 5000
      });
      return;
    }

    this.saving.set(true);
    const formValue = this.shipmentForm.value;
    const selectedDest = this.destinations().find((d: Destination) => d.id === formValue.destino_id);

    const data = {
      ...formValue,
      destino: selectedDest ? selectedDest.nombre : formValue.destino_texto,
      costo_descarga: this.costoDescargaRegreso,
      total_carga: this.totalCarga
    };

    this.shipmentsService.create(data).subscribe({
      next: (response) => {
        this.saving.set(false);
        this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Embarque guardado correctamente',
            life: 3000
        });
        // Emit the created shipment data including the ID from response
        this.saved.emit({ ...data, id: response?.id });
        // Reset form after successful save
        this.resetForm();
      },
      error: () => {
        this.saving.set(false);
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudo guardar el embarque. Verifica los datos.',
            life: 5000
        });
        this.submitError.set('No se pudo guardar el embarque. Intenta de nuevo.');
      }
    });
  }
}
