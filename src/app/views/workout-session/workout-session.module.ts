import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutSessionContainerComponent } from './workout-session-container.component';
import { WorkoutRoutingModule } from './workout-routing.module';
import {TimerModule} from '../../libs/timer/timer.module';
import { WorkoutComponent } from './components/workout/workout.component';
import {MatCardModule} from '@angular/material/card';
import { SerieComponent } from './components/serie/serie.component';



@NgModule({
  declarations: [
    WorkoutSessionContainerComponent,
    WorkoutComponent,
    SerieComponent
  ],
            imports: [
              CommonModule,
              WorkoutRoutingModule,
              TimerModule,
              MatCardModule
            ]
          })
export class WorkoutSessionModule { }
