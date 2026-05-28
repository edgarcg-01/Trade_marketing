import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  // Si el usuario es chofer y está intentando acceder a una ruta no permitida
  const user = authService.user();
  if (user?.role_name === 'chofer') {
    const currentPath = state.url;
    const allowedPath = '/driver-assignments';
    
    // Si no está en la ruta permitida, redirigir
    if (currentPath !== allowedPath && currentPath !== '/') {
      router.navigate([allowedPath]);
      return false;
    }
  }

  return true;
};
