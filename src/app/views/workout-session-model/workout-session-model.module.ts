import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkoutSessionModelContainerComponent} from './workout-session-model-container.component';
import {MatCardModule} from '@angular/material/card';
import {WorkoutSessionModelRoutingModule} from './workout-session-model-routing.module';
import {WorkoutSessionModelComponent} from './components/workout-session-model/workout-session-model.component';
import {WorkoutModelComponent} from './components/workout-model/workout-model.component';
import {SharedModule} from '../../libs/components/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import {
  WorkoutSessionModelFormComponent
} from './components/workout-session-model-form/workout-session-model-form.component';


@NgModule({
            declarations: [
              WorkoutSessionModelContainerComponent,
              WorkoutSessionModelComponent,
              WorkoutModelComponent,
              WorkoutSessionModelFormComponent
            ],
            imports:      [
              CommonModule,
              MatCardModule,
              WorkoutSessionModelRoutingModule,
              SharedModule,
              MatDialogModule
            ]
          })
export class WorkoutSessionModelModule {
}
