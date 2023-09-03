import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {WorkoutSession} from '../../model/workout-session';
import {activeWorkoutSessionActions} from '../../../data/store/actions/active-workout-session.actions';
import {WorkoutSessionModel} from '../../model/workout-session-model';

@Injectable({providedIn: 'root'})
export class SelectWorkoutSessionModelUseCase {

  constructor(private store: Store) {
  }

  execute(model: WorkoutSessionModel): void {
    const session = new WorkoutSession(model
    );
    this.store.dispatch(activeWorkoutSessionActions.setActiveSession({session}));
  }
}
