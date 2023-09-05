import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkoutSessionContainerComponent} from './workout-session-container.component';
import {WorkoutRoutingModule} from './workout-routing.module';
import {TimerModule} from '../../libs/timer/timer.module';
import {WorkoutComponent} from '../../libs/components/workout/workout.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '../../libs/forms/forms.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../libs/components/shared.module';
import {WorkoutSessionFormComponent} from './components/workout-session-form/workout-session-form.component';


@NgModule({
            declarations: [
              WorkoutSessionContainerComponent,
              WorkoutComponent,
              WorkoutSessionFormComponent,
            ],
            exports:      [],
            imports:      [
              CommonModule,
              WorkoutRoutingModule,
              TimerModule,
              MatCardModule,
              FormsModule,
              ReactiveFormsModule,
              SharedModule
            ]
          })
export class WorkoutSessionModule {
}
