import {WorkoutSessionModel} from '../../model/workout-session-model';
import {Store} from '@ngrx/store';
import {workingSessionModelActions} from '../../../data/store/actions/working-session-model.actions';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UpdateWorkoutSessionModelUseCase {
  constructor(private store: Store) {
  }

  execute(model: WorkoutSessionModel): void {
    this.store.dispatch(workingSessionModelActions.updateModelSuccess({model}));
  }
}
