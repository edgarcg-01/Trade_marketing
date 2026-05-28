import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div class="space-y-1">
        <h1 class="text-headline text-content-main">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="text-body text-content-muted">{{ subtitle() }}</p>
        }
      </div>

      <div class="flex items-center gap-2">
        <ng-content />
      </div>
    </div>
  `
})
export class PageHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>('');
}
