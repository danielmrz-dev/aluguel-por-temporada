import { inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class UserRegisterFormController {

    userRegisterForm!: FormGroup
    private readonly _fb = inject(FormBuilder)

    constructor() {
        this.userRegisterForm = this._fb.group({
            cpf: ['26721702070', [Validators.required]],
            name: ['Pitty', [Validators.required]],
            lastName: ['Peach', [Validators.required]],
            email: ['pitty-peach@dogs.com', [Validators.required]],
            phoneNumber: ['99999999999', [Validators.required]],
            birthDate: ['', [Validators.required]],
            responsible: ['M', [Validators.required]],
            address: this._fb.group({
                cep: ['00000000', [Validators.required]],
                logradouro: ['M', [Validators.required]],
                numero: ['M', [Validators.required]],
                complemento: ['M', [Validators.required]],
                bairro: ['M', [Validators.required]],
                localidade: ['M', [Validators.required]],
                uf: ['M', [Validators.required]],
            }),
        }, { updateOn: 'blur' })
    }
    
    get address(): FormGroup {
        return this.userRegisterForm.get('address') as FormGroup;
    }
    get birthDate(): FormControl {
        return this.userRegisterForm.get('birthDate') as FormControl;
    }
}