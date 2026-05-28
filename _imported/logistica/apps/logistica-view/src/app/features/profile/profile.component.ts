import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Mi Perfil</h1>
      <p class="text-gray-600">Aquí puedes ver y editar tu información de perfil.</p>
    </div>
  `
})
export class ProfileComponent {}
