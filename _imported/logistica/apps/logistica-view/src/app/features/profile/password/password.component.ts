import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Cambiar Contraseña</h1>
      <p class="text-gray-600">Aquí puedes cambiar tu contraseña.</p>
    </div>
  `
})
export class PasswordComponent {}
