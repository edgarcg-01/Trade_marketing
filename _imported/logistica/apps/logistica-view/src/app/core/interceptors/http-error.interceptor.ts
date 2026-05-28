import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const messageService = inject(MessageService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'Error inesperado. Intenta nuevamente.';

      switch (error.status) {
        case 0:
          message = 'Sin conexión con el servidor.';
          break;
        case 400:
          message = error.error?.message || 'Datos incorrectos o incompletos.';
          break;
        case 401:
          message = 'Sesión expirada. Inicia sesión nuevamente.';
          localStorage.removeItem('access_token');
          router.navigate(['/login']);
          break;
        case 403:
          message = 'No tienes permisos para realizar esta acción.';
          break;
        case 404:
          message = 'Recurso no encontrado.';
          break;
        case 409:
          message = error.error?.message || 'Conflicto: el registro ya existe.';
          break;
        case 500:
          message = 'Error interno del servidor.';
          break;
      }

      // No mostrar toast para el endpoint de login (maneja su propio error)
      if (!req.url.includes('/auth/login')) {
        messageService.add({
          severity: 'error',
          summary: `Error ${error.status || ''}`,
          detail: message,
          life: 5000
        });
      }

      return throwError(() => error);
    })
  );
};
