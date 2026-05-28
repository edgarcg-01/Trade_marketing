import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';

@Component({
  selector: 'app-photo-upload',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputText, InputTextarea],
  template: `
    <div class="photo-upload-container">
      <h3 class="text-lg font-semibold mb-4 text-logistics-text">Foto de Entrega</h3>
      
      <div class="upload-area p-6 border-2 border-dashed border-logistics-border rounded-lg text-center">
        <div *ngIf="!previewUrl()" class="space-y-4">
          <div class="text-4xl text-logistics-text-mid">📷</div>
          <p class="text-logistics-text-mid">Toma una foto o selecciona una de tu galería</p>
          <div class="flex gap-3 justify-center">
            <p-button 
              label="Usar Cámara"
              icon="pi pi-camera"
              (onClick)="onTakePhoto()"
              [class]="'p-button-brand'">
            </p-button>
            <p-button 
              label="Seleccionar Foto"
              icon="pi pi-image"
              (onClick)="onSelectPhoto()">
            </p-button>
          </div>
        </div>
        
        <div *ngIf="previewUrl()" class="preview-container">
          <img 
            [src]="previewUrl()" 
            alt="Vista previa" 
            class="max-w-full max-h-64 mx-auto rounded-lg">
          <button 
            (onClick)="clearPhoto()"
            class="mt-3 text-sm text-red-500 hover:text-red-600">
            Eliminar foto
          </button>
        </div>
      </div>

      <div *ngIf="previewUrl()" class="mt-4 space-y-3">
        <div>
          <label for="descripcion-foto" class="block text-sm font-medium text-logistics-text mb-2">Descripción (opcional)</label>
          <textarea 
            id="descripcion-foto"
            [(ngModel)]="descripcion"
            pInputTextarea
            [rows]="2"
            placeholder="Describe la foto de entrega..."
            class="w-full p-2 bg-logistics-surface border border-logistics-border rounded">
          </textarea>
        </div>
        
        <p-button 
          label="Subir Foto"
          (onClick)="onUpload()"
          [disabled]="uploading()"
          [loading]="uploading()">
        </p-button>
      </div>
    </div>
  `,
  styles: [`
    .photo-upload-container {
      padding: 1rem;
    }
    
    .upload-area {
      background-color: var(--surface);
      transition: all 0.2s ease;
    }
    
    .upload-area:hover {
      background-color: var(--surface2);
    }
    
    .preview-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `]
})
export class PhotoUploadComponent {
  @Input() embarqueId = '';
  @Output() upload = new EventEmitter<{ url: string; public_id?: string; descripcion?: string }>();
  
  previewUrl = signal<string | null>(null);
  descripcion = '';
  isUploading = signal(false);

  onTakePhoto() {
    // Fallback a input file para web
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        this.handleFileSelect(target.files[0]);
      }
    };
    input.click();
  }

  onSelectPhoto() {
    // Fallback a input file para web
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        this.handleFileSelect(target.files[0]);
      }
    };
    input.click();
  }

  handleFileSelect(file: File) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          this.previewUrl.set(result);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  clearPhoto() {
    this.previewUrl.set(null);
    this.descripcion = '';
  }

  uploading() {
    return this.isUploading();
  }

  onUpload() {
    if (!this.previewUrl()) return;

    this.isUploading.set(true);

    // TODO: Implementar subida a Cloudinary
    // Por ahora, simular subida exitosa
    setTimeout(() => {
      const mockUrl = this.previewUrl();
      if (mockUrl) {
        this.upload.emit({
          url: mockUrl,
          descripcion: this.descripcion
        });
        this.isUploading.set(false);
        this.clearPhoto();
      }
    }, 1000);
  }
}
