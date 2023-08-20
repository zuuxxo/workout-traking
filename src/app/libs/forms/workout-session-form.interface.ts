import {FormArray, FormGroup} from '@angular/forms';
import {WorkoutFormInterface} from '../../views/workout-session/components/workout-form/workout-form.interface';

export interface WorkoutSessionFormInterface {
  workoutSession: FormArray<FormGroup<WorkoutFormInterface>>;
}
