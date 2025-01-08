import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective } from 'ngx-mask';
import { CpfValidatorDirective } from '../../../../validators/cpf-validator.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-general-information',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    CpfValidatorDirective,
    CommonModule
  ],
  templateUrl: './general-information.component.html',
  styleUrl: './general-information.component.scss'
})
export class GeneralInformationComponent {
  @Input({ required: true }) userRegisterForm!: FormGroup

  get cpf(): FormControl {
    return this.userRegisterForm.get('cpf') as FormControl
  }
}
