import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {WorkoutFormInterface} from './workout-form.interface';

export interface WorkoutSessionFormInterface {
  title: FormControl<string>;
  workouts: FormArray<FormGroup<WorkoutFormInterface>>;
  date: FormControl<Date>;
}
