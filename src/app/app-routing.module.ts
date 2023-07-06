import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path:         '',
  loadChildren: () => import('./views/workout-session/workout-session.module').then(m => m.WorkoutSessionModule)
}];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
          })
export class AppRoutingModule {
}
