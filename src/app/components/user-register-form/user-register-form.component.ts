import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { UserRegisterFormController } from './user-register-form-controller';
import { ReactiveFormsModule } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideNgxMask } from 'ngx-mask'
import { GeneralInformationComponent } from './components/general-information/general-information.component';
import { AddressInformationComponent } from './components/address-information/address-information.component';
import { IUser } from '../../interfaces/user.interface';
import { convertDateObjToPtBrDate } from '../../utils/convert-date-obj-to-ptbr-date';


@Component({
  selector: 'app-user-register-form',
  standalone: true,
  imports: [
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    GeneralInformationComponent,
    AddressInformationComponent
],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    },
    provideNativeDateAdapter(),
    provideNgxMask()
  ],
  templateUrl: './user-register-form.component.html',
  styleUrl: './user-register-form.component.scss'
})
export class UserRegisterFormComponent extends UserRegisterFormController {
  stepperOrientation: 'horizontal' | 'vertical' = 'vertical';
  private readonly _breakpointObserver = inject(BreakpointObserver);

  constructor() {
    super();
    this._breakpointObserver.observe([Breakpoints.HandsetPortrait]).subscribe(result => {
      this.stepperOrientation = result.matches ? 'vertical' : 'horizontal';
    });
  }

  onSubmit() {
    const newUser: IUser = structuredClone(this.userRegisterForm.value);
    newUser.birthDate = convertDateObjToPtBrDate(this.birthDate.value);
    console.log(newUser);
  }
}
