import { inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { CepValidatorService } from "../../validators/cep-validator/cep-validator.service";


export class UserRegisterFormController {

    userRegisterForm!: FormGroup;
    private readonly _fb = inject(FormBuilder);
    private readonly _cepValidator = inject(CepValidatorService);

    constructor() {
        this.userRegisterForm = this._fb.group({
            cpf: ['26721702070', [Validators.required]],
            name: ['Pitty', [Validators.required]],
            lastName: ['Peach', [Validators.required]],
            email: ['pitty-peach@dogs.com', [Validators.required]],
            phoneNumber: ['99999999999', [Validators.required]],
            birthDate: [new Date('2019-06-16'), [Validators.required]],
            responsible: ['M', [Validators.required]],
            address: this._fb.group({
                cep: ['', {
                    validators: [Validators.required],
                    asyncValidators: [this._cepValidator.validate.bind(this._cepValidator)],
                }],
                logradouro: ['', [Validators.required]],
                numero: ['', [Validators.required]],
                complemento: [''],
                bairro: ['', [Validators.required]],
                localidade: ['', [Validators.required]],
                uf: ['', [Validators.required]],
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