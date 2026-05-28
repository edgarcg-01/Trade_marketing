import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface JwtPayload {
  sub: string;
  username: string;
  role_name: string;
  roles?: string[]; // Roles secundarios
  permissions: Record<string, boolean>;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  
  // Estado usando Signals
  public token = signal<string | null>(null);
  public user = signal<JwtPayload | null>(null);
  public isAuthenticated = signal<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.restoreSession();
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap(response => {
        if (response.access_token) {
          this.setToken(response.access_token);
          const payload = this.decodeToken(response.access_token);
          this.user.set(payload);
          this.isAuthenticated.set(true);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.token.set(null);
    this.user.set(null);
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }

  private setToken(token: string): void {
    localStorage.setItem('access_token', token);
    this.token.set(token);
  }

  private restoreSession(): void {
    const token = localStorage.getItem('access_token');
    if (token) {
      const payload = this.decodeToken(token);
      // Verificar que el token no haya expirado
      if (payload && payload.exp * 1000 > Date.now()) {
        this.token.set(token);
        this.user.set(payload);
        this.isAuthenticated.set(true);
      } else {
        this.logout();
      }
    }
  }

  private decodeToken(token: string): JwtPayload | null {
    try {
      const base64 = token.split('.')[1];
      const json = atob(base64);
      return JSON.parse(json);
    } catch (e) {
      return null;
    }
  }

  hasPermission(permission: string): boolean {
    const user = this.user();
    if (!user) return false;
    // Verificar rol principal y roles secundarios
    const allUserRoles = [user.role_name, ...(user.roles || [])];
    return user.permissions?.[permission] === true || allUserRoles.includes('superadmin');
  }

  hasRole(role: string): boolean {
    const user = this.user();
    if (!user) return false;
    // Verificar rol principal y roles secundarios
    const allUserRoles = [user.role_name, ...(user.roles || [])];
    return allUserRoles.includes(role);
  }
}
