import { Directive, forwardRef, inject } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { CepValidatorService } from "./cep-validator.service";

@Directive({
    selector: '[appCepValidator]',
    standalone: true,
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => CepValidatorDirective),
            multi: true
        }
    ]
})
export class CepValidatorDirective implements AsyncValidator {

    private readonly _cepValidatorService = inject(CepValidatorService);
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return this._cepValidatorService.validate(control);
    }
}