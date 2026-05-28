import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, TopbarComponent],
  template: `
    <div class="min-h-screen bg-surface-layout text-content-main">
      <app-topbar />
      <main class="p-6">
        <router-outlet />
      </main>
    </div>
  `
})
export class LayoutComponent {}
