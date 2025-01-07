import { inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class UserRegisterFormController {

    userRegisterForm!: FormGroup
    private readonly _fb = inject(FormBuilder)

    constructor() {
        this.userRegisterForm = this._fb.group({
            cpf: [55555555555, [Validators.required]],
            name: ['D', [Validators.required]],
            lastName: ['M', [Validators.required]],
            email: ['M', [Validators.required]],
            phoneNumber: ['55555555555', [Validators.required]],
            birthDate: ['', []],
            responsible: ['M', [Validators.required]],
            host: ['M', [Validators.required]],
            address: this._fb.group({
                cep: ['00000000', [Validators.required]],
                logradouro: ['M', [Validators.required]],
                numero: ['M', [Validators.required]],
                complemento: ['M', [Validators.required]],
                bairro: ['M', [Validators.required]],
                localidade: ['M', [Validators.required]],
                uf: ['M', [Validators.required]],
            }),
        })
    }
    
    get address(): FormGroup {
        return this.userRegisterForm.get('address') as FormGroup;
    }
}