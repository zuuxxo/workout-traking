import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {SerieFormInterface} from '../../../../libs/forms/serie-form/serie-form.interface';
import {WorkoutFormInterface} from '../../../../libs/forms/interfaces/workout-form.interface';

@Component({
             selector:        'app-workout-form',
             templateUrl:     './workout-form.component.html',
             styleUrls:       ['./workout-form.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class WorkoutFormComponent {
  @Input() workoutForm: FormGroup<WorkoutFormInterface>;

  get series(): FormGroup[] {
    const formArray = this.workoutForm.get('series') as FormArray;
    return formArray.controls as FormGroup<SerieFormInterface>[];
  }

}
