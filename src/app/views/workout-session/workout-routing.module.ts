import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WorkoutSessionContainerComponent} from './workout-session-container.component';
import {TimerModule} from '../../libs/timer/timer.module';


const routes: Routes = [{path: '', component: WorkoutSessionContainerComponent}];

@NgModule({
            declarations: [],
            imports:      [RouterModule.forChild(routes), TimerModule
            ]
          })
export class WorkoutRoutingModule {
}
