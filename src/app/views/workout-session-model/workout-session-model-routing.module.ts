import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkoutSessionModelContainerComponent} from './workout-session-model-container.component';


const routes: Routes = [{path: '', component: WorkoutSessionModelContainerComponent}];

@NgModule({
            declarations: [],
            imports:      [RouterModule.forChild(routes)
            ]
          })
export class WorkoutSessionModelRoutingModule {
}
