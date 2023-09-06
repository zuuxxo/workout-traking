import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {SerieFormInterface} from '../serie-form/serie-form.interface';

export interface workoutModelForm {
  title: FormControl<string>;
  seriesNumber: FormControl<number>;
  objectifs: FormGroup<SerieFormInterface>;
}

export interface WorkoutSessionModelFormInterface {
  id: FormControl<string>;
  title: FormControl<string>;
  workouts: FormArray<FormGroup<workoutModelForm>>;
  comments: FormControl<string>;
}
