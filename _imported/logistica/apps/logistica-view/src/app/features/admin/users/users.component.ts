import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

interface Usuario {
  id: string;
  username: string;
  nombre: string;
  email?: string;
  role_name: string;
  roles?: string[]; // Roles secundarios
  activo: boolean;
  ultimo_acceso?: string;
  created_at?: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [MessageService, ConfirmationService],
  template: `
    <div class="p-6 space-y-6">
      <p-toast></p-toast>
      <p-confirmDialog></p-confirmDialog>
      
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-content-main">Gestión de Usuarios</h1>
          <p class="text-gray-600 text-sm mt-1">Administra los choferes y usuarios del sistema</p>
        </div>
        <p-button 
          label="Nuevo Usuario" 
          icon="pi pi-plus"
          styleClass="p-button-brand"
          (onClick)="abrirDialogoNuevo()" />
      </div>

      <!-- Tabla de Usuarios -->
      <div class="card-premium p-4">
        <p-table 
          [value]="usuarios()" 
          [loading]="cargando()"
          styleClass="p-datatable-modern"
          [rowHover]="true"
          [paginator]="true"
          [rows]="10">
          
          <ng-template pTemplate="header">
            <tr>
              <th class="text-left text-label">Usuario</th>
              <th class="text-left text-label">Nombre</th>
              <th class="text-center text-label">Rol</th>
              <th class="text-center text-label">Estado</th>
              <th class="text-center text-label">Último Acceso</th>
              <th class="text-center text-label">Acciones</th>
            </tr>
          </ng-template>
          
          <ng-template pTemplate="body" let-usuario>
            <tr class="hover-lift">
              <td>
                <span class="font-mono font-bold text-content-main">{{ usuario.username }}</span>
              </td>
              <td>
                <span class="text-content-main">{{ usuario.nombre }}</span>
                <p class="text-[10px] text-content-faint" *ngIf="usuario.email">{{ usuario.email }}</p>
              </td>
              <td class="text-center">
                <span class="status-chip chip-secondary !text-[9px]">{{ usuario.role_name }}</span>
              </td>
              <td class="text-center">
                <span class="status-chip" [ngClass]="usuario.activo ? 'chip-success' : 'chip-danger'" !text-[9px]>
                  {{ usuario.activo ? 'Activo' : 'Inactivo' }}
                </span>
              </td>
              <td class="text-center text-xs text-content-faint">
                {{ usuario.ultimo_acceso ? (usuario.ultimo_acceso | date:'dd/MM/yy HH:mm') : 'Nunca' }}
              </td>
              <td class="text-center">
                <div class="flex justify-center gap-2">
                  <p-button 
                    icon="pi pi-key" 
                    rounded
                    text
                    severity="secondary"
                    size="small"
                    (onClick)="abrirDialogoPassword(usuario)"
                    pTooltip="Cambiar Contraseña"
                    tooltipPosition="top" />
                  <p-button 
                    icon="pi pi-pencil" 
                    rounded
                    text
                    severity="secondary"
                    size="small"
                    (onClick)="abrirDialogoEditar(usuario)"
                    pTooltip="Editar"
                    tooltipPosition="top" />
                  <p-button 
                    icon="pi pi-trash" 
                    rounded
                    text
                    severity="danger"
                    size="small"
                    (onClick)="confirmarEliminar(usuario)"
                    pTooltip="Eliminar"
                    tooltipPosition="top" />
                </div>
              </td>
            </tr>
          </ng-template>
          
          <ng-template pTemplate="emptymessage">
            <tr>
              <td colspan="6" class="text-center py-8 text-content-muted">
                <i class="pi pi-users text-4xl mb-2 block opacity-20"></i>
                <span class="text-sm">No hay usuarios registrados</span>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>

      <!-- Diálogo Nuevo/Editar Usuario -->
      <p-dialog 
        [visible]="dialogoVisible()" 
        (visibleChange)="dialogoVisible.set($event)"
        [modal]="true"
        [style]="{ width: '450px' }"
        [draggable]="false"
        [resizable]="false"
        [header]="usuarioEditando() ? 'Editar Usuario' : 'Nuevo Usuario'">
        
        <div class="space-y-4" *ngIf="usuarioForm()">
          <div>
            <label class="text-[10px] font-black uppercase tracking-widest text-content-muted block mb-1">Nombre Completo</label>
            <input type="text" pInputText [(ngModel)]="usuarioForm().nombre" name="nombre" class="w-full" placeholder="Ej: Juan Pérez García" />
          </div>
          
          <div>
            <label class="text-[10px] font-black uppercase tracking-widest text-content-muted block mb-1">Nombre de Usuario</label>
            <input type="text" pInputText [(ngModel)]="usuarioForm().username" name="username" class="w-full" placeholder="Ej: juan.perez" [disabled]="!!usuarioEditando()" />
          </div>
          
          <div>
            <label class="text-[10px] font-black uppercase tracking-widest text-content-muted block mb-1">Email</label>
            <input type="email" pInputText [(ngModel)]="usuarioForm().email" name="email" class="w-full" placeholder="Ej: juan@megadulces.com" />
          </div>
          
          <div *ngIf="!usuarioEditando()">
            <label class="text-[10px] font-black uppercase tracking-widest text-content-muted block mb-1">Contraseña</label>
            <p-password 
              [(ngModel)]="usuarioForm().password" 
              name="password"
              [toggleMask]="true"
              [feedback]="true"
              styleClass="w-full"
              [inputStyleClass]="'w-full'"
              placeholder="Mínimo 6 caracteres" />
          </div>
          
          <div>
            <label class="text-[10px] font-black uppercase tracking-widest text-content-muted block mb-1">Rol</label>
            <select [(ngModel)]="usuarioForm().role_name" name="role_name" class="w-full p-2 border border-divider rounded bg-surface-card">
              <option value="chofer">Chofer</option>
              <option value="operador">Operador</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
          
          <div class="flex items-center gap-2">
            <input type="checkbox" id="activo" [(ngModel)]="usuarioForm().activo" name="activo" class="accent-brand" />
            <label for="activo" class="text-sm">Usuario activo</label>
          </div>
        </div>
        
        <ng-template pTemplate="footer">
          <p-button label="Cancelar" [outlined]="true" (onClick)="dialogoVisible.set(false)" />
          <p-button 
            label="Guardar" 
            styleClass="p-button-brand"
            [loading]="guardando()"
            (onClick)="guardarUsuario()" />
        </ng-template>
      </p-dialog>

      <!-- Diálogo Cambiar Contraseña -->
      <p-dialog 
        [visible]="dialogoPasswordVisible()" 
        (visibleChange)="dialogoPasswordVisible.set($event)"
        [modal]="true"
        [style]="{ width: '350px' }"
        [draggable]="false"
        [resizable]="false"
        header="Cambiar Contraseña">
        
        <div class="space-y-4" *ngIf="passwordForm()">
          <p class="text-sm text-content-muted mb-4">
            Cambiando contraseña para: <strong class="text-content-main">{{ passwordForm().username }}</strong>
          </p>
          
          <div>
            <label class="text-[10px] font-black uppercase tracking-widest text-content-muted block mb-1">Nueva Contraseña</label>
            <p-password 
              [(ngModel)]="passwordForm().newPassword" 
              name="newPassword"
              [toggleMask]="true"
              [feedback]="true"
              styleClass="w-full"
              [inputStyleClass]="'w-full'"
              placeholder="Mínimo 6 caracteres" />
          </div>
          
          <div>
            <label class="text-[10px] font-black uppercase tracking-widest text-content-muted block mb-1">Confirmar Contraseña</label>
            <p-password 
              [(ngModel)]="passwordForm().confirmPassword" 
              name="confirmPassword"
              [toggleMask]="true"
              [feedback]="false"
              styleClass="w-full"
              [inputStyleClass]="'w-full'"
              placeholder="Repite la contraseña" />
          </div>
        </div>
        
        <ng-template pTemplate="footer">
          <p-button label="Cancelar" [outlined]="true" (onClick)="dialogoPasswordVisible.set(false)" />
          <p-button 
            label="Actualizar" 
            styleClass="p-button-brand"
            [loading]="guardando()"
            (onClick)="actualizarPassword()" />
        </ng-template>
      </p-dialog>
    </div>
  `
})
export class UsersComponent implements OnInit {
  private http = inject(HttpClient);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  private apiUrl = `${environment.apiUrl}/auth`;

  usuarios = signal<Usuario[]>([]);
  cargando = signal(false);
  guardando = signal(false);
  dialogoVisible = signal(false);
  dialogoPasswordVisible = signal(false);
  usuarioEditando = signal<Usuario | null>(null);
  usuarioForm = signal<any>(null);
  passwordForm = signal<any>(null);

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando.set(true);
    this.http.get<Usuario[]>(`${this.apiUrl}/users`).subscribe({
      next: (data) => {
        console.log('[UsersComponent] Usuarios recibidos:', data);
        console.log('[UsersComponent] Cantidad de usuarios:', data.length);
        this.usuarios.set(data);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error cargando usuarios:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudieron cargar los usuarios'
        });
        this.cargando.set(false);
      }
    });
  }

  abrirDialogoNuevo() {
    this.usuarioEditando.set(null);
    this.usuarioForm.set({
      username: '',
      nombre: '',
      email: '',
      password: '',
      role_name: 'chofer',
      activo: true
    });
    this.dialogoVisible.set(true);
  }

  abrirDialogoEditar(usuario: Usuario) {
    this.usuarioEditando.set(usuario);
    this.usuarioForm.set({ ...usuario });
    this.dialogoVisible.set(true);
  }

  abrirDialogoPassword(usuario: Usuario) {
    this.passwordForm.set({
      userId: usuario.id,
      username: usuario.username,
      newPassword: '',
      confirmPassword: ''
    });
    this.dialogoPasswordVisible.set(true);
  }

  guardarUsuario() {
    const form = this.usuarioForm();
    if (!form.nombre || !form.username || (!this.usuarioEditando() && !form.password)) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Campos requeridos',
        detail: 'Por favor completa todos los campos obligatorios'
      });
      return;
    }

    this.guardando.set(true);

    if (this.usuarioEditando()) {
      // Actualizar usuario existente
      this.http.put(`${this.apiUrl}/users/${this.usuarioEditando()!.id}`, form).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Usuario actualizado correctamente'
          });
          this.dialogoVisible.set(false);
          this.cargarUsuarios();
          this.guardando.set(false);
        },
        error: (err) => {
          console.error('Error actualizando usuario:', err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error?.message || 'No se pudo actualizar el usuario'
          });
          this.guardando.set(false);
        }
      });
    } else {
      // Crear nuevo usuario
      this.http.post(`${this.apiUrl}/register`, form).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Usuario creado correctamente'
          });
          this.dialogoVisible.set(false);
          this.cargarUsuarios();
          this.guardando.set(false);
        },
        error: (err) => {
          console.error('Error creando usuario:', err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error?.message || 'No se pudo crear el usuario'
          });
          this.guardando.set(false);
        }
      });
    }
  }

  actualizarPassword() {
    const form = this.passwordForm();
    if (!form.newPassword || form.newPassword.length < 6) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Contraseña inválida',
        detail: 'La contraseña debe tener al menos 6 caracteres'
      });
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Contraseñas no coinciden',
        detail: 'Las contraseñas ingresadas no coinciden'
      });
      return;
    }

    this.guardando.set(true);
    this.http.put(`${this.apiUrl}/users/${form.userId}/password`, { password: form.newPassword }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Contraseña actualizada correctamente'
        });
        this.dialogoPasswordVisible.set(false);
        this.guardando.set(false);
      },
      error: (err) => {
        console.error('Error actualizando contraseña:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message || 'No se pudo actualizar la contraseña'
        });
        this.guardando.set(false);
      }
    });
  }

  confirmarEliminar(usuario: Usuario) {
    this.confirmationService.confirm({
      message: `¿Estás seguro de eliminar al usuario "${usuario.username}"?`,
      header: 'Confirmar Eliminación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Eliminar',
      rejectLabel: 'Cancelar',
      accept: () => this.eliminarUsuario(usuario.id),
      acceptButtonStyleClass: 'p-button-danger'
    });
  }

  eliminarUsuario(id: string) {
    this.http.delete(`${this.apiUrl}/users/${id}`).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Usuario eliminado correctamente'
        });
        this.cargarUsuarios();
      },
      error: (err) => {
        console.error('Error eliminando usuario:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message || 'No se pudo eliminar el usuario'
        });
      }
    });
  }
}
