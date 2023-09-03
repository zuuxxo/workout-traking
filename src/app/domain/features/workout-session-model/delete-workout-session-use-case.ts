import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {workoutSessionModelActions} from '../../../data/store/actions/workout-session-model.actions';

@Injectable({providedIn: 'root'})
export class DeleteWorkoutSessionUseCase {
  constructor(private store: Store) {
  }

  execute(id: string): void {
    this.store.dispatch(workoutSessionModelActions.deleteModelSuccess({id}));
  }
}
