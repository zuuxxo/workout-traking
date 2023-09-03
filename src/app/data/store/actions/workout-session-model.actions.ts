import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {WorkoutSessionModel} from '../../../domain/model/workout-session-model';


export const workoutSessionModelActions = createActionGroup({
                                                              source: 'Workout-session-model',
                                                              events: {
                                                                load:               emptyProps(),
                                                                newModelSuccess:    props<{
                                                                  model: WorkoutSessionModel
                                                                }>(),
                                                                deleteModelSuccess: props<{ id: string }>(),
                                                                updateModelSuccess: props<{model: WorkoutSessionModel}>()
                                                              }
                                                            });

