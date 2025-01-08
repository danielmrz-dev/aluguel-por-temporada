import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCpfValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CpfValidatorDirective,
      multi: true
    }
  ]
})
export class CpfValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {

    const cpfString = control.value.toString()
    if (cpfString.length !== 11 || /^(\d)\1+$/.test(cpfString)) {
      
      return { invalidCpf: true }
    }

    const primeiroDigito = calcularDigitoVerificador(cpfString.slice(0, 9), 10)
    const segundoDigito = calcularDigitoVerificador(cpfString.slice(0, 10), 11)

    const CPF_VALIDO = primeiroDigito === Number(cpfString[9]) && segundoDigito === Number(cpfString[10]);

    if (!CPF_VALIDO) {
      return { invalidCpf: true }
    }

    return null
  }

}

const calcularDigitoVerificador = (baseCpf: string, pesoInicial: number): number => {
  const soma = baseCpf.split('').map(Number).reduce((acumulador, digito, index) => {
    return acumulador + digito * (pesoInicial - index)
  }, 0);

  const resto = soma % 11
  return resto < 2 ? 0 : 11 - resto
}
