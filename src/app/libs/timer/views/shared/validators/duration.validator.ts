import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {AddNewTimerUseCase} from '../../../domain/features/add-new-timer-use-case';

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
