import {WorkingSessionState} from '../reducers/working-session-model.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export const selectWorkingSessionState  = createFeatureSelector<WorkingSessionState>('workingSession');
export const selectWorkoutSessionModels = createSelector(
  selectWorkingSessionState,
  (state: WorkingSessionState) => state.models
);
