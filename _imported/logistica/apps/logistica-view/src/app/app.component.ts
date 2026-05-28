import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule, ConfirmDialogModule, ConfirmPopupModule],
  template: `
    <router-outlet />
    <p-toast />
    <p-confirmDialog />
    <p-confirmPopup />
  `
})
export class AppComponent {}
