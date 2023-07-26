import {FormArray, FormGroup} from '@angular/forms';
import {WorkoutFormInterface} from './workout-form/workout-form.interface';

export interface WorkoutSessionFormInterface {
  workoutSession: FormArray<FormGroup<WorkoutFormInterface>>;
}
