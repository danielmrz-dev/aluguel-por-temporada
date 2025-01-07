import { inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class UserRegisterFormController {

    userRegisterForm!: FormGroup
    private readonly _fb = inject(FormBuilder)

    constructor() {
        this.userRegisterForm = this._fb.group({
            cpf: [5, [Validators.required]],
            name: ['D', [Validators.required]],
            lastName: ['M', [Validators.required]],
            email: ['M', [Validators.required]],
            phoneNumber: ['M', [Validators.required]],
            birthDate: ['M', [Validators.required]],
            responsible: ['M', [Validators.required]],
            host: ['M', [Validators.required]],
            address: this._fb.group({
                cep: ['M', [Validators.required]],
                logradouro: ['M', [Validators.required]],
                numero: ['M', [Validators.required]],
                complemento: ['M', [Validators.required]],
                bairro: ['M', [Validators.required]],
                localidade: ['M', [Validators.required]],
                uf: ['M', [Validators.required]],
            }),

        })
    }

}