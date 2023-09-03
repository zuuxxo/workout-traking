import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {WorkoutSession} from '../../../domain/model/workout-session';

export const activeWorkoutSessionActions = createActionGroup({
                                                               source: 'active-workout-session-model',
                                                               events: {
                                                                 load:             emptyProps(),
                                                                 setActiveSession: props<{
                                                                   session: WorkoutSession
                                                                 }>(),
                                                               }
                                                             });
