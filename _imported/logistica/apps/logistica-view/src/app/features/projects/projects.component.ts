import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="min-h-screen bg-surface-layout">
      <!-- Top Bar -->
      <header class="bg-surface-card border-b border-surface-border px-6 py-4">
        <div class="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 class="text-headline text-content-main font-bold">Plataforma Operativa</h1>
            <p class="text-label text-content-dim">Seleccione un proyecto para continuar</p>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-right hidden sm:block">
              <p class="text-body font-semibold text-content-main">{{ user()?.username }}</p>
              <p class="text-label text-content-muted">{{ user()?.role_name }}</p>
            </div>
            <p-button
              label="Cerrar Sesión"
              icon="pi pi-sign-out"
              [outlined]="true"
              severity="secondary"
              size="small"
              (click)="logout()">
            </p-button>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-6xl mx-auto px-6 py-12">
        <!-- Greeting -->
        <div class="mb-10">
          <h2 class="text-4xl font-bold text-content-main">
            Bienvenido, <span class="text-primary-500">{{ user()?.username }}</span>
          </h2>
          <p class="text-lg text-content-dim mt-2">Estos son los proyectos asignados a tu cuenta.</p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let project of projects"
            (click)="navigateTo(project.route)"
            class="group bg-surface-card rounded-2xl border border-surface-border p-8 cursor-pointer transition-all duration-300 hover:border-primary-500 hover:shadow-2xl hover:-translate-y-1">
            
            <!-- Card Header -->
            <div class="flex items-start justify-between mb-6">
              <div class="h-14 w-14 rounded-xl bg-surface-ground group-hover:bg-primary-500 flex items-center justify-center transition-all duration-300">
                <i [ngClass]="project.icon" class="text-primary-500 group-hover:text-white text-2xl transition-colors"></i>
              </div>
              <span class="inline-flex items-center rounded-full border border-surface-border bg-surface-ground px-3 py-1 text-xs font-medium text-content-main">
                {{ project.status }}
              </span>
            </div>

            <!-- Card Body -->
            <h3 class="text-2xl font-bold text-content-main group-hover:text-primary-500 transition-colors mb-3">
              {{ project.name }}
            </h3>
            <p class="text-content-dim leading-relaxed h-20 overflow-hidden">
              {{ project.description }}
            </p>

            <!-- Card Footer -->
            <div class="mt-8 flex items-center text-primary-500 font-bold">
              Acceder al módulo
              <i class="pi pi-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-2"></i>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .bg-surface-layout { background-color: var(--surface-ground); }
    .bg-surface-card { background-color: var(--surface-card); }
    .border-surface-border { border-color: var(--surface-border); }
    .text-content-main { color: var(--text-color); }
    .text-content-dim { color: var(--text-color-secondary); }
    .text-content-muted { color: #64748b; }
    .bg-surface-ground { background-color: var(--surface-ground); }
  `]
})
export class ProjectsComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  user = this.authService.user;

  projects = [
    {
      id: 'logistica',
      name: 'Logística y Embarques',
      description: 'Control de flota, gestión de embarques, liquidaciones y seguimiento de rutas en tiempo real.',
      icon: 'pi pi-truck',
      route: '/dashboard',
      status: 'Activo'
    },
    {
      id: 'flota',
      name: 'Gestión de Flota (Próximo)',
      description: 'Control de consumos, bitácora de uso, mantenimientos preventivos y alertas de rendimiento.',
      icon: 'pi pi-cog',
      route: '/fleet',
      status: 'Nuevo'
    }
  ];

  navigateTo(route: string): void {
    const user = this.authService.user();
    if (user && user.role_name === 'colaborador') {
      this.router.navigate(['/driver-assignments']);
      return;
    }
    this.router.navigate([route]);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
