import { Component, OnInit, inject, signal, output, input, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffService, ShipmentsService, GuidesService } from '../../core/services/logistics.service';
import { Collaborator, Shipment } from '../../core/models/logistics.models';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextarea } from 'primeng/inputtextarea';
import { SelectModule } from 'primeng/select';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { PopoverModule } from 'primeng/popover';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-guide-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputTextarea,
    SelectModule,
    CalendarModule,
    CheckboxModule,
    PopoverModule,
    IconComponent
  ],
  templateUrl: './guide-form.component.html'
})
export class GuideFormComponent implements OnInit {
  guideToEdit = input<any>();
  prefillFromShipment = input<any>();
  saved = output<any>();
  canceled = output<void>();

  private fb = inject(FormBuilder);
  private staffService = inject(StaffService);
  private shipmentsService = inject(ShipmentsService);
  private guidesService = inject(GuidesService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);

  guideForm: FormGroup;
  shipments = signal<any[]>([]);
  operators = signal<any[]>([]);
  helpers = signal<any[]>([]);

  // Opciones de dropdowns (readonly para evitar recreación en cada change detection)
  readonly tipoOptions = [
    { label: 'Local', value: 'local' },
    { label: 'Foráneo', value: 'foraneo' },
    { label: 'Especial', value: 'especial' }
  ];

  readonly estadoOptions = [
    { label: 'Pendiente', value: 'pendiente' },
    { label: 'En Ruta', value: 'en_ruta' },
    { label: 'Completada', value: 'completada' }
  ];

  saving = signal(false);
  submitError = signal<string | null>(null);
  isPrefilled = signal(false);
  prefilledChoferNombre = signal<string>('');
  selectedChoferId = signal<string>('');
  selectedEmbarqueId = signal<string>('');

  // Computed signal for chofer display name - auto-updates when dependencies change
  displayChoferName = computed(() => {
    const id = this.selectedChoferId();
    const embarqueId = this.selectedEmbarqueId();

    // Use prefilled name first
    if (this.prefilledChoferNombre()) {
      return this.prefilledChoferNombre();
    }

    // Look up in operators catalog
    const operators = this.operators();
    if (operators.length > 0 && id) {
      const operator = operators.find((op: any) => op.id === id);
      if (operator?.nombre) {
        return operator.nombre;
      }
    }

    // Fallback: look up in shipments
    const shipments = this.shipments();
    if (embarqueId && shipments.length > 0) {
      const shipment = shipments.find((s: any) => s.id === embarqueId);
      if (shipment?.operador_nombre) {
        return shipment.operador_nombre;
      }
    }

    if (id) return 'Cargando...';
    return 'Selecciona un embarque primero';
  });

  constructor() {
    // Generar número de guía automático
    const numeroGenerado = `GIA-${Date.now().toString().slice(-6)}`;

    this.guideForm = this.fb.group({
      numero: [numeroGenerado, Validators.required],
      embarque_id: [''],
      tipo: [{ value: 'local', disabled: true }, Validators.required],
      estado: [{ value: 'pendiente', disabled: true }],
      chofer_id: [{ value: '', disabled: true }, Validators.required],
      ayudante1_id: [{ value: '', disabled: true }],
      ayudante2_id: [{ value: '', disabled: true }],
      cargador_id: [{ value: '', disabled: true }],
      km_salida: [{ value: 0, disabled: true }, Validators.min(0)],
      viaticos: [{ value: 0, disabled: true }, Validators.min(0)],
      fecha_salida: [{ value: new Date(), disabled: true }, Validators.required],
      obs: [{ value: '', disabled: true }],
      monto_maniobras: [{ value: 0, disabled: true }, Validators.min(0)],
      monto_ayudantes: [{ value: 0, disabled: true }, Validators.min(0)],
      monto_permisos: [{ value: 0, disabled: true }, Validators.min(0)],
      monto_talachas: [{ value: 0, disabled: true }, Validators.min(0)]
    });

    // Listen for embarque selection to auto-fill chofer
    this.guideForm.get('embarque_id')?.valueChanges.subscribe((embarqueId) => {
      this.selectedEmbarqueId.set(embarqueId || '');
      if (embarqueId) {
        let shipment = this.shipments().find((s: any) => s.id === embarqueId);

        if (shipment) {
          // Found in local array
          this.prefilledChoferNombre.set(shipment.operador_nombre || '');
          this.selectedChoferId.set(shipment.operador_id || '');
          this.guideForm.patchValue({
            chofer_id: shipment.operador_id,
            fecha_salida: shipment.fecha ? new Date(shipment.fecha) : new Date(),
            km_salida: shipment.km || 0
          });
          this.guideForm.get('chofer_id')?.disable();
          this.enableFormFields();
        } else {
          // Not in local array, fetch individual
          this.shipmentsService.findOne(embarqueId).subscribe({
            next: (fetchedShipment) => {
              if (fetchedShipment) {
                this.prefilledChoferNombre.set(fetchedShipment.operador_nombre || '');
                this.selectedChoferId.set(fetchedShipment.operador_id || '');
                this.guideForm.patchValue({
                  chofer_id: fetchedShipment.operador_id,
                  fecha_salida: fetchedShipment.fecha ? new Date(fetchedShipment.fecha) : new Date(),
                  km_salida: fetchedShipment.km || 0
                });
                this.guideForm.get('chofer_id')?.disable();
                this.enableFormFields();
              }
            },
            error: () => {
              console.error('Error fetching shipment details');
            }
          });
        }
      } else {
        // Enable chofer field when no embarque selected
        this.prefilledChoferNombre.set('');
        this.selectedChoferId.set('');
        this.guideForm.get('chofer_id')?.enable();
        this.guideForm.patchValue({
          chofer_id: ''
        });
        // Disable other fields
        this.disableFormFields();
      }
    });

    // Listen for chofer_id changes
    this.guideForm.get('chofer_id')?.valueChanges.subscribe((choferId) => {
      this.selectedChoferId.set(choferId || '');
    });

    effect(() => {
      const guide = this.guideToEdit();
      if (guide) {
        this.guideForm.patchValue({
          ...guide,
          fecha_salida: guide.fecha_salida ? new Date(guide.fecha_salida) : new Date()
        });
      }
    });

    effect(() => {
      const shipment = this.prefillFromShipment();
      if (shipment) {
        this.isPrefilled.set(true);
        this.prefilledChoferNombre.set(shipment.chofer_nombre || '');
        this.selectedChoferId.set(shipment.chofer_id || '');
        this.selectedEmbarqueId.set(shipment.embarque_id || '');
        this.guideForm.patchValue({
          embarque_id: shipment.embarque_id,
          chofer_id: shipment.chofer_id,
          fecha_salida: shipment.fecha_salida ? new Date(shipment.fecha_salida) : new Date(),
          km_salida: shipment.km_salida || 0
        });
        // Disable chofer field when prefilled (embarque already selected)
        this.guideForm.get('chofer_id')?.disable();
      }
    }, { allowSignalWrites: true });
  }

  isInvalid(field: string): boolean {
    const control = this.guideForm.get(field);
    return control ? (control.invalid && (control.dirty || control.touched)) : false;
  }

  enableFormFields() {
    const fields = ['tipo', 'fecha_salida', 'km_salida', 'viaticos', 'obs',
                   'ayudante1_id', 'ayudante2_id', 'cargador_id',
                   'monto_maniobras', 'monto_ayudantes', 'monto_permisos', 'monto_talachas'];
    fields.forEach(field => {
      this.guideForm.get(field)?.enable();
    });
  }

  disableFormFields() {
    const fields = ['tipo', 'fecha_salida', 'km_salida', 'viaticos', 'obs',
                   'ayudante1_id', 'ayudante2_id', 'cargador_id',
                   'monto_maniobras', 'monto_ayudantes', 'monto_permisos', 'monto_talachas'];
    fields.forEach(field => {
      this.guideForm.get(field)?.disable();
    });
  }

  getOperatorName(id: string): string {
    // Use prefilled name first (from sessionStorage or embarque selection)
    if (this.prefilledChoferNombre()) {
      return this.prefilledChoferNombre();
    }

    // Look up in operators catalog
    const operators = this.operators();
    if (operators.length > 0) {
      const operator = operators.find((op: any) => op.id === id);
      if (operator?.nombre) {
        return operator.nombre;
      }
    }

    // Fallback: look up in shipments (which are already loaded)
    const embarqueId = this.guideForm.get('embarque_id')?.value;
    const shipments = this.shipments();
    if (embarqueId && shipments.length > 0) {
      const shipment = shipments.find((s: any) => s.id === embarqueId);
      if (shipment?.operador_nombre) {
        return shipment.operador_nombre;
      }
    }

    // If we have an ID but no name yet, show loading
    if (id) {
      return 'Cargando...';
    }

    return 'Selecciona un embarque primero';
  }

  ngOnInit() {
    this.loadCatalogs();

    // Immediate prefill check - ensures data is applied when form opens
    const shipment = this.prefillFromShipment();
    if (shipment) {
      this.isPrefilled.set(true);
      this.prefilledChoferNombre.set(shipment.chofer_nombre || '');
      this.selectedChoferId.set(shipment.chofer_id || '');
      this.selectedEmbarqueId.set(shipment.embarque_id || '');
      setTimeout(() => {
        this.guideForm.patchValue({
          embarque_id: shipment.embarque_id,
          chofer_id: shipment.chofer_id,
          fecha_salida: shipment.fecha_salida ? new Date(shipment.fecha_salida) : new Date(),
          km_salida: shipment.km_salida || 0
        });
        // Disable chofer field when prefilled (embarque already selected)
        this.guideForm.get('chofer_id')?.disable();
      }, 0);
    }
  }

  loadCatalogs() {
    // Cargar embarques
    this.shipmentsService.findAll().subscribe({
      next: (data) => this.shipments.set(data)
    });

    // Cargar personal
    this.staffService.findAll().subscribe({
      next: (data) => {
        // En la base de datos se maneja por el array 'roles'
        this.operators.set(data.filter((s: any) => 
          s.roles && (s.roles.includes('chofer') || s.roles.includes('Operador'))
        ));
        this.helpers.set(data.filter((s: any) => 
          s.roles && (s.roles.includes('ayudante') || s.roles.includes('cargador'))
        ));
      }
    });
  }

  onSubmit() {
    this.guideForm.markAllAsTouched();
    
    if (this.guideForm.invalid || this.saving()) {
      this.messageService.add({ 
        severity: 'warn', 
        summary: 'Atención', 
        detail: 'Por favor, completa todos los campos obligatorios resaltados en rojo.',
        life: 5000
      });
      return;
    }

    this.saving.set(true);
    this.submitError.set(null);

    // Use getRawValue to include disabled fields (chofer_id, estado)
    const guideData = this.guideForm.getRawValue();
    const isEdit = !!this.guideToEdit();
    const action$ = isEdit 
      ? this.guidesService.update(this.guideToEdit().id, guideData)
      : this.guidesService.create(guideData);

    action$.subscribe({
      next: (savedGuide) => {
        this.saving.set(false);
        this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: isEdit ? 'Guía actualizada correctamente' : 'Guía guardada correctamente',
            life: 3000
        });
        this.saved.emit(savedGuide);
      },
      error: () => {
        this.saving.set(false);
        this.messageService.add({ 
            severity: 'error', 
            summary: 'Error', 
            detail: 'No se pudo guardar la guía. Verifica los datos.',
            life: 5000
        });
        this.submitError.set('No se pudo guardar la guía. Intenta de nuevo.');
      }
    });
  }
}
