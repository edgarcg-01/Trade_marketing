import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextarea } from 'primeng/inputtextarea';
import { ChecklistItem } from '../../../core/models/logistics.models';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxModule, ButtonModule, InputTextarea],
  template: `
    <div class="checklist-container">
      <h3 class="text-lg font-semibold mb-4 text-logistics-text">{{ title }}</h3>
      
      <div class="space-y-3">
        <div *ngFor="let item of items; trackBy: trackById" class="checklist-item">
          <div class="flex items-start gap-3 p-3 bg-logistics-surface rounded-lg border border-logistics-border">
            <p-checkbox 
              [(ngModel)]="item.completado" 
              [binary]="true"
              (ngModelChange)="onItemChange()"
              class="mt-1">
              {{ item.nombre }}
            </p-checkbox>
            
            <div class="flex-1">
              <textarea 
                *ngIf="item.completado"
                [(ngModel)]="item.observaciones"
                pInputTextarea
                [rows]="2"
                placeholder="Agregar observaciones..."
                class="w-full mt-2 text-sm p-2 bg-logistics-surface2 border border-logistics-border rounded"
                (ngModelChange)="onItemChange()">
              </textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 flex justify-between items-center">
        <div class="text-sm text-logistics-text-mid">
          Progreso: {{ completedCount() }} / {{ items.length }} completados
        </div>
        <p-button 
          label="Guardar"
          (onClick)="onSave()"
          [disabled]="!hasChanges()"
          [class]="'p-button-brand'">
        </p-button>
      </div>
    </div>
  `,
  styles: [`
    .checklist-container {
      padding: 1rem;
    }
    
    .checklist-item {
      transition: all 0.2s ease;
    }
    
    .checklist-item:hover {
      background-color: var(--surface2);
    }
  `]
})
export class ChecklistComponent {
  @Input() title = 'Checklist';
  @Input() items: ChecklistItem[] = [];
  @Input() embarqueId = '';
  @Input() tipo: 'inspeccion_salida' | 'llegada' = 'inspeccion_salida';
  @Output() save = new EventEmitter<ChecklistItem[]>();
  @Output() completed = new EventEmitter<boolean>();

  hasChanges = signal(false);
  completedCount = signal(0);

  onItemChange() {
    this.hasChanges.set(true);
    this.completedCount.set(this.items.filter(item => item.completado).length);
    const isComplete = this.completedCount() === this.items.length;
    console.log('Checklist onItemChange - completedCount:', this.completedCount(), 'total:', this.items.length, 'isComplete:', isComplete);
    this.completed.emit(isComplete);
  }

  onSave() {
    this.save.emit(this.items);
    this.hasChanges.set(false);
  }

  trackById(index: number, item: ChecklistItem): string {
    return item.id;
  }
}
