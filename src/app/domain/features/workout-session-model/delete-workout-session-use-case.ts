import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {workingSessionModelActions} from '../../../data/store/actions/working-session-model.actions';

@Injectable({providedIn: 'root'})
export class DeleteWorkoutSessionUseCase {
  constructor(private store: Store) {
  }

  execute(id: string): void {
    this.store.dispatch(workingSessionModelActions.deleteModelSuccess({id}));
  }
}
