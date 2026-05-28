import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="filter-bar-modern">
      <ng-content />
    </div>
  `
})
export class FilterBarComponent {}
