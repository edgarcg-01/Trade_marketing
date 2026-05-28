import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ios-prime-segmented',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ios-segmented-container" [style.--num-options]="options().length">
      <div 
        class="ios-segmented-pill"
        [style.transform]="'translateX(' + (activeIndex() * 100) + '%)'">
      </div>
      
      @for (option of options(); track option.value) {
        <button
          type="button"
          class="ios-segmented-option"
          [class.active]="selectedValue() === option.value"
          (click)="selectOption(option.value)">
          <span class="ios-segmented-label">{{ option.label }}</span>
        </button>
      }
    </div>
  `,
  styleUrls: ['./ios-prime-segmented.component.scss']
})
export class IosPrimeSegmentedComponent {
  options = input.required<{ label: string, value: string }[]>();
  selectedValue = model.required<string>();

  activeIndex = computed(() => {
    const index = this.options().findIndex(opt => opt.value === this.selectedValue());
    return index !== -1 ? index : 0;
  });

  selectOption(value: string) {
    this.selectedValue.set(value);
  }
}
