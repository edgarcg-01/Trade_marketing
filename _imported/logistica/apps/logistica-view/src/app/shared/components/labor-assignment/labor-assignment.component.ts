import { ChangeDetectionStrategy, Component, input, output, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-labor-assignment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, DropdownModule, InputNumberModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './labor-assignment.component.html'
})
export class LaborAssignmentComponent {
  title = input.required<string>();
  icon = input.required<string>();
  formArray = input.required<FormArray>();
  catalogoColaboradores = input.required<any[]>();
  showTarifa = input<boolean>(false);
  showEmptyState = input<boolean>(true);
  saving = input<boolean>(false);
  
  addClicked = output<void>();
  removeClicked = output<number>();

  @ContentChild('emptyStateTemplate') emptyStateTemplate!: TemplateRef<any>;
  @ContentChild('additionalContent') additionalContent!: TemplateRef<any>;

  get controls() {
    return this.formArray().controls;
  }

  get length() {
    return this.formArray().length;
  }

  getGroup(index: number): FormGroup {
    return this.formArray().at(index) as FormGroup;
  }
}
