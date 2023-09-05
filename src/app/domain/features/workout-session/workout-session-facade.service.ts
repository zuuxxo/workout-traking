import {Injectable} from '@angular/core';
import {GetActiveWorkoutSessionUseCase} from './get-active-workout-session-use-case';

@Injectable({providedIn: 'root'})
export class WorkoutSessionFacadeService {
  constructor(private getActiveSessionWorkout: GetActiveWorkoutSessionUseCase) {
  }

  get activeSession() {
    return this.getActiveSessionWorkout.execute();
  }
}
