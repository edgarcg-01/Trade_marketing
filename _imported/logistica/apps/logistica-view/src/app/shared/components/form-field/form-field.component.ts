import { ChangeDetectionStrategy, Component, input, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-field.component.html'
})
export class FormFieldComponent {
  label = input.required<string>();
  control = input.required<FormControl>();
  required = input<boolean>(false);
  showError = input<boolean>(true);
  errorMessage = input<string>('Este campo es obligatorio.');
  submitAttempted = input<boolean>(false);
  fieldId = input<string>('');
  
  @ContentChild('inputContent') inputContent!: TemplateRef<any>;

  get isInvalid(): boolean {
    return this.control().invalid && (this.control().touched || this.submitAttempted());
  }
}
