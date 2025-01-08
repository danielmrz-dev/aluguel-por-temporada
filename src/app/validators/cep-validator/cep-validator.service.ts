import { inject, Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors, Validator } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { ViaCepService } from "../../services/viacep.service";

@Injectable({
    providedIn: 'root',
})
export class CepValidatorService implements AsyncValidator {

    private readonly _viacepService = inject(ViaCepService)
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        if (!control.touched) {
            return of(null)
        }
        return this._viacepService.IsCepValid(control.value).pipe(
            map((isCepValid) => (isCepValid ? null : { invalidCep: true })),
            catchError(() => of(null))
        );
    }
}