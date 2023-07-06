import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutSessionContainerComponent } from './workout-session-container.component';
import { WorkoutRoutingModule } from './workout-routing.module';
import {TimerModule} from '../../libs/timer/timer.module';



@NgModule({
  declarations: [
    WorkoutSessionContainerComponent
  ],
            imports: [
              CommonModule,
              WorkoutRoutingModule,
              TimerModule
            ]
          })
export class WorkoutSessionModule { }
