import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {SerieFormInterface} from '../serie-form/serie-form.interface';

export interface WorkoutFormInterface {
  title: FormControl<string>;
  series: FormArray<FormGroup<SerieFormInterface>>;
  comments: FormControl<string>;
}
