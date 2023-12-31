import {Store} from '@ngrx/store';
import {WorkoutSessionModel} from '../../model/workout-session-model';
import {Injectable} from '@angular/core';
import {workoutSessionModelActions} from '../../../data/store/actions/workout-session-model.actions';
import {v4 as uuidv4} from 'uuid';

@Injectable({providedIn: 'root'})
export class NewWorkoutSessionModelUseCase {
  // TODO supprimer UUID par la suite et prendre l id de la BDD ?

  constructor(private store: Store) {
  }

  execute(model: WorkoutSessionModel): void {
    const id           = uuidv4();
    const creationDate = new Date();
    this.store.dispatch(workoutSessionModelActions.newModelSuccess({model: {...model, id, creationDate}}));
  }

}
