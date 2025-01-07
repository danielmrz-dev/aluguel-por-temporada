import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { UserRegisterFormController } from './user-register-form-controller';
import { ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-user-register-form',
  standalone: true,
  imports: [
    MatStepperModule, 
    MatFormFieldModule, 
    MatInputModule, 
    CommonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './user-register-form.component.html',
  styleUrl: './user-register-form.component.scss'
})
export class UserRegisterFormComponent extends UserRegisterFormController {

}
