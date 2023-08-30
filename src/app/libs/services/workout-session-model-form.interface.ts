import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {SerieFormInterface} from '../forms/serie-form/serie-form.interface';

export interface workoutModelForm {
  title: FormControl<string>;
  serieNumber: FormControl<number>;
  objectifs: FormGroup<SerieFormInterface>;
}

export interface WorkoutSessionModelFormInterface {
  id: FormControl<string>;
  title: FormControl<string>;
  workouts: FormArray<FormGroup<workoutModelForm>>;
  comments: FormControl<string>;
}
