import { FormControl } from "@angular/forms"

export const enableAddressInputs = (...inputs: FormControl[]) => {
    inputs.forEach(input => input.enable())
}

export const disableAddressInputs = (...inputs: FormControl[]) => {
    inputs.forEach(input => input.disable())
}