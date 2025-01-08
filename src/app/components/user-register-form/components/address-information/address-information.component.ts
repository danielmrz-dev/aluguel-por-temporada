import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective } from 'ngx-mask';
import { ViaCepService } from '../../../../services/viacep.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address-information',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './address-information.component.html',
  styleUrl: './address-information.component.scss'
})
export class AddressInformationComponent {
  @Input() userRegisterForm!: FormGroup;

  private readonly _viacepService = inject(ViaCepService);

  get cep(): FormControl {
    return this.userRegisterForm.get('address')?.get('cep') as FormControl;
  }
  get logradouro(): FormControl {
    return this.userRegisterForm.get('address')?.get('logradouro') as FormControl;
  }

  get bairro(): FormControl {
    return this.userRegisterForm.get('address')?.get('bairro') as FormControl;
  }

  get localidade(): FormControl {
    return this.userRegisterForm.get('address')?.get('localidade') as FormControl;
  }

  get uf(): FormControl {
    return this.userRegisterForm.get('address')?.get('uf') as FormControl;
  }

  get address(): FormGroup {
    return this.userRegisterForm.get('address') as FormGroup;
  }

  fullfillAddressOnCepInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this._viacepService.getAddress(input.value).subscribe((response) => {
      if (!response.cep) {
        console.log(this.cep.errors);        
      };
      this.address.patchValue({
        cep: response.cep,
        logradouro: response.logradouro,
        bairro: response.bairro,
        localidade: response.localidade,
        uf: response.uf,
      })
      
    })
  }

}
