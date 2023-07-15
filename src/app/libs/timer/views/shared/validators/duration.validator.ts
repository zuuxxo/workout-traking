import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {AddNewTimerUseCase} from '../../../domain/features/add-new-timer-use-case';
import {ErrorStateMatcher} from '@angular/material/core';

export function DurationValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return AddNewTimerUseCase.isValidDuration(control.value) ? null : {
      maxDuration: {
        value:   control.value,
        message: 'la valeur doit être comprise entre 0 et 60'
      }
    };
  };
}

export class durationErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null) {
    return (control.value && control?.invalid && control.dirty) ?? false;
  }
}
