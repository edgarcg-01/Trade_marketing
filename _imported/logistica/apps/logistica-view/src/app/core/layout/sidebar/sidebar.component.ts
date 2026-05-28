import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="w-64 min-h-screen bg-logistics-surface border-r border-logistics-border p-4">
      <ul class="space-y-2">
        <li>
          <a routerLink="/dashboard" routerLinkActive="active" 
             class="flex items-center gap-3 px-4 py-3 rounded text-logistics-text-mid hover:bg-logistics-surface2 hover:text-logistics-text transition-colors">
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a routerLink="/shipments" routerLinkActive="active"
             class="flex items-center gap-3 px-4 py-3 rounded text-logistics-text-mid hover:bg-logistics-surface2 hover:text-logistics-text transition-colors">
            <span>Embarques</span>
          </a>
        </li>
        <li>
          <a routerLink="/guides" routerLinkActive="active"
             class="flex items-center gap-3 px-4 py-3 rounded text-logistics-text-mid hover:bg-logistics-surface2 hover:text-logistics-text transition-colors">
            <span>Guías</span>
          </a>
        </li>
        <li>
          <a routerLink="/fleet" routerLinkActive="active"
             class="flex items-center gap-3 px-4 py-3 rounded text-logistics-text-mid hover:bg-logistics-surface2 hover:text-logistics-text transition-colors">
            <span>Unidades</span>
          </a>
        </li>
        <li>
          <a routerLink="/staff" routerLinkActive="active"
             class="flex items-center gap-3 px-4 py-3 rounded text-logistics-text-mid hover:bg-logistics-surface2 hover:text-logistics-text transition-colors">
            <span>Colaboradores</span>
          </a>
        </li>
        <li>
          <a routerLink="/config" routerLinkActive="active"
             class="flex items-center gap-3 px-4 py-3 rounded text-logistics-text-mid hover:bg-logistics-surface2 hover:text-logistics-text transition-colors">
            <span>Configuración</span>
          </a>
        </li>
        <li>
          <a routerLink="/reports" routerLinkActive="active"
             class="flex items-center gap-3 px-4 py-3 rounded text-logistics-text-mid hover:bg-logistics-surface2 hover:text-logistics-text transition-colors">
            <span>Reportes</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    .active {
      background: var(--surface2);
      color: var(--text);
      border-left: 3px solid var(--accent);
    }
  `]
})
export class SidebarComponent {}
