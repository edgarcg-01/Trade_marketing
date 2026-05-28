import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="kpi-card-modern animate-fade-in-up">
      <p class="text-label text-content-muted">{{ label() }}</p>
      <p class="mt-2 text-3xl font-semibold tracking-tight text-content-main">{{ value() }}</p>
      @if (hint()) {
        <p class="mt-1 text-body text-content-faint">{{ hint() }}</p>
      }
    </article>
  `
})
export class KpiCardComponent {
  label = input.required<string>();
  value = input.required<string | number>();
  hint = input<string>('');
}
