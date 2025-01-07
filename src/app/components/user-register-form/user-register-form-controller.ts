import { inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class UserRegisterFormController {

    userRegisterForm!: FormGroup
    private readonly _fb = inject(FormBuilder)

    constructor() {
        this.userRegisterForm = this._fb.group({
            nome: ['', [Validators.required]]
        })
    }

}