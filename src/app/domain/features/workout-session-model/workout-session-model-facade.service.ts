import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {WorkoutSessionModel} from '../../model/workout-session-model';
import {selectWorkoutSessionModels} from '../../../data/store/selectors/working-session-model.selectors';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class WorkoutSessionModelFacadeService {
  constructor(private store: Store) {
  }

  get workoutSessionModels(): Observable<WorkoutSessionModel[]> {
    console.log(this.store.select(selectWorkoutSessionModels))
    return this.store.select(selectWorkoutSessionModels);
  }

}
