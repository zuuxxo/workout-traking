import {WorkoutSessionModel} from '../../../domain/model/workout-session-model';
import {createReducer, on} from '@ngrx/store';
import {workoutSessionModelActions} from '../actions/workout-session-model.actions';
import {WorkoutSession} from '../../../domain/model/workout-session';
import {activeWorkoutSessionActions} from '../actions/active-workout-session.actions';

export interface WorkoutSessionState {
  models: Array<WorkoutSessionModel>;
  activeWorkoutSession: WorkoutSession;
}

export const initialState: WorkoutSessionState = {
  models:               [
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
  activeWorkoutSession: null
};

export const workoutSessionReducer = createReducer(
         initialState,
         on(workoutSessionModelActions.newModelSuccess, (state, {model}) => ({
           ...state, models: [...state.models, model]
         })),
         on(workoutSessionModelActions.deleteModelSuccess, (state, {id}) => {
           const newModels = state.models.filter((model) => model.id !== id);
           return {...state, models: newModels};
         }),
         on(workoutSessionModelActions.updateModelSuccess, (state, {model}) => {
           const newModels = state.models.map((m: WorkoutSessionModel) => {
             return m.id === model.id ? model : m;
           });
           return {...state, models: newModels};
         }),
         on(activeWorkoutSessionActions.setActiveSession, (state, {session}) => ({...state, activeWorkoutSession: session}))
       )
;
