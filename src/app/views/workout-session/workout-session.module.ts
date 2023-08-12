import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutSessionContainerComponent } from './workout-session-container.component';
import { WorkoutRoutingModule } from './workout-routing.module';
import {TimerModule} from '../../libs/timer/timer.module';
import { WorkoutComponent } from './components/workout/workout.component';
import {MatCardModule} from '@angular/material/card';
import { SerieComponent } from '../../libs/components/serie/serie.component';
import {FormsModule} from '../../libs/forms/forms.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
            declarations: [
              WorkoutSessionContainerComponent,
              WorkoutComponent,
              SerieComponent
            ],
            exports:      [
              SerieComponent
            ],
            imports:      [
              CommonModule,
              WorkoutRoutingModule,
              TimerModule,
              MatCardModule,
              FormsModule,
              ReactiveFormsModule
            ]
          })
export class WorkoutSessionModule { }
