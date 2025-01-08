import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective } from 'ngx-mask';
import { CpfValidatorDirective } from '../../../../validators/cpf-validator.directive';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from '../../../../validators/email-validator.directive';
import { OnlyLettersValidatorDirective } from '../../../../validators/only-letters-validator.directive';

@Component({
  selector: 'app-general-information',
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    CpfValidatorDirective,
    EmailValidatorDirective,
    OnlyLettersValidatorDirective
  ],
  templateUrl: './general-information.component.html',
  styleUrl: './general-information.component.scss'
})
export class GeneralInformationComponent {
  @Input({ required: true }) userRegisterForm!: FormGroup;

  get cpf(): FormControl {
    return this.userRegisterForm.get('cpf') as FormControl;
  }

  get email(): FormControl {
    return this.userRegisterForm.get('email') as FormControl;
  }
}
