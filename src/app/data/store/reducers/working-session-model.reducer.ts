import {WorkoutSessionModel} from '../../../domain/model/workout-session-model';
import {createReducer, on} from '@ngrx/store';
import {workingSessionModelActions} from '../actions/working-session-model.actions';

export interface WorkingSessionState {
  models: Array<WorkoutSessionModel>;
}

export const initialState: WorkingSessionState = {
  models: [
    {
      title:        'Seance Push',
      id:           'jdzlkdjzhdqjd-dzzljdzlkd',
      workouts:     [
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
        }],
      creationDate: new Date(),
      comments:     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi aut beatae consectetur ducimus expedita explicabo hic itaque magni nostrum numquam placeat, porro, repellat tempore. In neque nesciunt non.'
    },
  ],
};

export const workingSessionReducer = createReducer(
  initialState,
  on(workingSessionModelActions.newModelSuccess, (state, {model}) => ({
    ...state, models: [...state.models, model]
  }))
);
