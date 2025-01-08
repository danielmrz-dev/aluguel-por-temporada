import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyLettersValidator]',
  standalone: true,
})
export class OnlyLettersValidatorDirective {
  @HostListener('input', ['$event']) onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
  }
}
