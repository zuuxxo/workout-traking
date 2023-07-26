import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkoutSessionContainerComponent} from './workout-session-container.component';


const routes: Routes = [{path: '', component: WorkoutSessionContainerComponent}];

@NgModule({
            declarations: [],
            imports:      [RouterModule.forChild(routes)
            ]
          })
export class WorkoutRoutingModule {
}
