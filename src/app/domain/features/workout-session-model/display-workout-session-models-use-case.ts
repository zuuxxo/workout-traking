import {Injectable} from '@angular/core';
import {selectWorkoutSessionModels} from '../../../data/store/selectors/working-session-model.selectors';
import {Observable} from 'rxjs';
import {WorkoutSessionModel} from '../../model/workout-session-model';
import {Store} from '@ngrx/store';

@Injectable({providedIn: 'root'})
export class DisplayWorkoutSessionModelsUseCase {

  constructor(private store: Store) {
  }

  execute(): Observable<WorkoutSessionModel[]> {
    return this.store.select(selectWorkoutSessionModels);
  }
}
