import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutSessionModelContainerComponent } from './workout-session-model-container.component';
import {MatCardModule} from '@angular/material/card';
import {WorkoutSessionModelRoutingModule} from './workout-session-model-routing.module';



@NgModule({
  declarations: [
    WorkoutSessionModelContainerComponent
  ],
            imports: [
              CommonModule,
              MatCardModule,
              WorkoutSessionModelRoutingModule
            ]
          })
export class WorkoutSessionModelModule { }
