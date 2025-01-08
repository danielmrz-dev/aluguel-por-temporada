import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-address-information',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    NgxMaskDirective,
    ReactiveFormsModule
  ],
  templateUrl: './address-information.component.html',
  styleUrl: './address-information.component.scss'
})
export class AddressInformationComponent {
  @Input() userRegisterForm!: FormGroup
}
