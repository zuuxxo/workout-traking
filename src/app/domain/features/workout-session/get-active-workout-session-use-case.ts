import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WorkoutSession} from '../../model/workout-session';
import {Store} from '@ngrx/store';
import {selectActiveSessionWorkout} from '../../../data/store/selectors/workout-session-model.selectors';

@Injectable({providedIn: 'root'})
export class GetActiveWorkoutSessionUseCase {
  constructor(private store: Store) {
  }

  execute(): Observable<WorkoutSession> {
    return this.store.select(selectActiveSessionWorkout)
  }


}

