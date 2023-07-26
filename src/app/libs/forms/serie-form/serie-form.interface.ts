import {Form, FormControl} from '@angular/forms';

export interface SerieFormInterface {
  weight: FormControl<number>;
  reps: FormControl<number>;
  rest: FormControl<number>;
}
