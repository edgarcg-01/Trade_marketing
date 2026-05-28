import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const driverGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const user = authService.user();
  
  // Verificar rol principal y roles secundarios
  const allUserRoles = [user?.role_name, ...(user?.roles || [])];
  
  // Si el usuario es chofer (incluyendo roles secundarios), solo permitir acceso a driver-assignments
  if (allUserRoles.includes('chofer')) {
    const allowedPath = '/driver-assignments';
    const currentPath = state.url;
    
    // Permitir acceso solo a driver-assignments
    if (currentPath === allowedPath) {
      return true;
    }
    
    // Redirigir a driver-assignments si intenta acceder a otra ruta
    router.navigate([allowedPath]);
    return false;
  }
  
  // Si no es chofer, permitir acceso normal
  return true;
};
