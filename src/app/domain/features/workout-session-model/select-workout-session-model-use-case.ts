import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {WorkoutSession} from '../../model/workout-session';
import {activeWorkoutSessionActions} from '../../../data/store/actions/active-workout-session.actions';
import {WorkoutSessionModel} from '../../model/workout-session-model';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class SelectWorkoutSessionModelUseCase {

  constructor(private store: Store,
              private router: Router) {
  }

  execute(model: WorkoutSessionModel): void {
    const session = new WorkoutSession(model);
    this.store.dispatch(activeWorkoutSessionActions.setActiveSession({session}));
    this.router.navigate(['/session']);
    //   TODO ajouter le routing ici / + voir le comportement a mettre en oeuvre lorsque l'enregistrement en BDD aura
    // ete effectué ?
  }
}
