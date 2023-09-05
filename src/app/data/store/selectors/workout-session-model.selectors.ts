import {WorkoutSessionState} from '../reducers/workout-session.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export const selectWorkoutSessionState  = createFeatureSelector<WorkoutSessionState>('workingSession');

export const selectWorkoutSessionModels = createSelector(
  selectWorkoutSessionState,
  (state: WorkoutSessionState) => state.models
);
export const selectActiveSessionWorkout = createSelector(selectWorkoutSessionState,
                                                         (state: WorkoutSessionState) => state.activeWorkoutSession);
