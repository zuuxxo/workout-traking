import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutSessionModelContainerComponent } from './workout-session-model-container.component';
import {MatCardModule} from '@angular/material/card';
import {WorkoutSessionModelRoutingModule} from './workout-session-model-routing.module';
import { WorkoutSessionModelComponent } from './components/workout-session-model/workout-session-model.component';
import { WorkoutModelComponent } from './components/workout-model/workout-model.component';
import {WorkoutSessionModule} from '../workout-session/workout-session.module';



@NgModule({
  declarations: [
    WorkoutSessionModelContainerComponent,
    WorkoutSessionModelComponent,
    WorkoutModelComponent
  ],
            imports: [
              CommonModule,
              MatCardModule,
              WorkoutSessionModelRoutingModule,
              WorkoutSessionModule
            ]
          })
export class WorkoutSessionModelModule { }
