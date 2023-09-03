import {WorkoutSessionModel} from '../../model/workout-session-model';
import {Store} from '@ngrx/store';
import {workoutSessionModelActions} from '../../../data/store/actions/workout-session-model.actions';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UpdateWorkoutSessionModelUseCase {
  constructor(private store: Store) {
  }

  execute(model: WorkoutSessionModel): void {
    this.store.dispatch(workoutSessionModelActions.updateModelSuccess({model}));
  }
}
