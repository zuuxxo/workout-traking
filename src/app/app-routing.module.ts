import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path:         'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path:         'session',
    loadChildren: () => import('./views/workout-session/workout-session.module').then(m => m.WorkoutSessionModule)
  },
  {
    path:         'models',
    loadChildren: () => import('./views/workout-session-model/workout-session-model.module').then(m => m.WorkoutSessionModelModule)
  }];

@NgModule({
            imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
            exports: [RouterModule]
          })
export class AppRoutingModule {
}
