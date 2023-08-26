import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericInputFieldComponent} from './generic-input-field/generic-input-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { WorkoutFormComponent } from '../../views/workout-session/components/workout-form/workout-form.component';
import { SerieFormComponent } from './serie-form/serie-form.component';
import {MatCardModule} from '@angular/material/card';
import { GenericTextAreaFieldComponent } from './generic-text-area-field/generic-text-area-field.component';


@NgModule({
            declarations: [GenericInputFieldComponent, WorkoutFormComponent, SerieFormComponent, GenericTextAreaFieldComponent],
            exports: [
              GenericInputFieldComponent,
              WorkoutFormComponent,
              SerieFormComponent,
              GenericTextAreaFieldComponent
            ],
			  imports: [
				  CommonModule,
				  MatFormFieldModule,
				  ReactiveFormsModule,
				  MatInputModule,
				  MatCardModule,
			  ]
		  })
export class FormsModule {
}
