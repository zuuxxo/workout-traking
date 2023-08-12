import {WorkoutSessionModel} from '../../../domain/model/workout-session-model';
import {createReducer} from '@ngrx/store';

export interface WorkingSessionState {
  models: Array<WorkoutSessionModel>;
}

export const initialState: WorkingSessionState = {
  models: [
    {
      title:        'Free training',
      workouts:     [],
      creationDate: null,
      comments:     'Selectionner ce modèle si vous souhaitez effectuer un entrainement libre '
    },
    {
      title:    'test',
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
        }], creationDate: new Date(),
      comments:           'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi aut beatae consectetur ducimus expedita explicabo hic itaque magni nostrum numquam placeat, porro, repellat tempore. In neque nesciunt non.'
    },
  ],
};

export const workingSessionReducer = createReducer(
  initialState
);
