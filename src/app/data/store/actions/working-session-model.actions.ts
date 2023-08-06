import {createActionGroup, emptyProps} from '@ngrx/store';


export const workingSessionModelActions = createActionGroup({
                                                              source: 'Working-session-model',
                                                              events: {
                                                                load: emptyProps(),

                                                              }
                                                            });
