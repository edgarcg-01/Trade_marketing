import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <i [class]="'pi pi-' + getPrimeName()" [ngStyle]="{'font-size': getSizeValue()}"></i>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }
  `]
})
export class IconComponent {
  name = input.required<string>();
  size = input<'sm' | 'md' | 'lg' | 'xl'>('md');

  getPrimeName(): string {
    const nameMap: Record<string, string> = {
      'close': 'times',
      'trash': 'trash',
      'refresh': 'refresh',
      'file-edit': 'file-edit',
      'map-marker': 'map-marker',
      'truck': 'truck',
      'box': 'box',
      'users': 'users',
      'database': 'database',
      'shopping-bag': 'shopping-bag',
      'spinner': 'spinner pi-spin',
      'info-circle': 'info-circle',
      'exclamation-triangle': 'exclamation-triangle',
      'check-circle': 'check-circle',
      'times-circle': 'times-circle',
      'calculator': 'calculator',
      'building': 'building',
      'check': 'check',
      'plus': 'plus',
      'minus': 'minus',
      'chevron-down': 'chevron-down',
      'chevron-up': 'chevron-up',
      'chevron-left': 'chevron-left',
      'chevron-right': 'chevron-right',
      'settings': 'cog',
      'cog': 'cog',
      'sun': 'sun',
      'moon': 'moon'
    };
    return nameMap[this.name()] || this.name();
  }

  getSizeValue(): string {
    const sizeMap = {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem'
    };
    return sizeMap[this.size()];
  }
}
