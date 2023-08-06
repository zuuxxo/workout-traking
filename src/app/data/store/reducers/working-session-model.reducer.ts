import {WorkoutSessionModel} from '../../../domain/model/workout-session-model';
import {createReducer} from '@ngrx/store';

export interface WorkingSessionState {
  models: Array<WorkoutSessionModel>;
}

export const initialState: WorkingSessionState = {
  models: [
    {
      name:     'EmptyModel',
      workouts: []
    },
    {
      name:     'test',
      workouts: [
        {
          title:        'Développé couché',
          seriesNumber: 6,
          objectifs:    {
            rest: 12, reps: 30, weight: 0
          }
        },
        {
          title:        'Développé incline',
          seriesNumber: 5,
          objectifs:    {
            rest: 12, reps: 30, weight: 0
          }
        }, {
          title:        'Développé decliné',
          seriesNumber: 3,
          objectifs:    {
            rest: 12, reps: 30, weight: 0
          }
        }]
    }
  ]
};

export const workingSessionReducer = createReducer(
  initialState
);
