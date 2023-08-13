import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkoutSessionContainerComponent} from './workout-session-container.component';
import {WorkoutRoutingModule} from './workout-routing.module';
import {TimerModule} from '../../libs/timer/timer.module';
import {WorkoutComponent} from './components/workout/workout.component';
import {MatCardModule} from '@angular/material/card';
import {SerieComponent} from '../../libs/components/serie/serie.component';
import {FormsModule} from '../../libs/forms/forms.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../libs/components/shared.module';


@NgModule({
            declarations: [
              WorkoutSessionContainerComponent,
              WorkoutComponent,
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
