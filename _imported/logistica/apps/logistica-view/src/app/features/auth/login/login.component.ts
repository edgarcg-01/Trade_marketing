import { Component, inject, Injectable, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../core/services/auth.service';

// Simple theme service inline
@Injectable({
  providedIn: 'root'
})
class ThemeService {
  isDarkMode = signal(false);
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  themeService = inject(ThemeService);

  loginForm: FormGroup;
  errorMessage: string | null = null;
  isLoading = false;

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  toggleTheme(): void {
    this.themeService.isDarkMode.update(v => !v);
    const htmlElement = document.querySelector('html');
    if (this.themeService.isDarkMode()) {
      htmlElement?.classList.add('my-app-dark');
    } else {
      htmlElement?.classList.remove('my-app-dark');
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const { username, password } = this.loginForm.value;

    this.authService.login({ username, password }).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/projects']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Error al iniciar sesión. Verifica tus credenciales.';
      }
    });
  }
}
