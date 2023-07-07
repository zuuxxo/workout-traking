import {createActionGroup, createFeature, createReducer, emptyProps, on, props} from '@ngrx/store';
import {Timer} from '../../domain/model/timer';

export const TimersActions    = createActionGroup({
                                                    source: 'Timers',
                                                    events: {
                                                      runTimer:               props<{ selectedTimer: number }>(),
                                                      'Timer Timers Success': props<{ data: unknown }>(),
                                                      'Timer Timers Failure': props<{ error: unknown }>(),
                                                    }
                                                  });
export const timersFeatureKey = 'timers';

export interface State {
  timers: Array<Timer>;
  selectedTimer: number;
}

export const initialState: State = {
  timers:        [{duration: 30}, {duration: 60}, {duration: 90}, {duration: 120}, {duration: 150}, {duration: 180}],
  selectedTimer: 60
};

export const reducer = createReducer(
  initialState,
  on(TimersActions.runTimer, (state, {selectedTimer}) => ({...state, selectedTimer: selectedTimer})),
  on(TimersActions.timerTimersSuccess, (state, action) => state),
  on(TimersActions.timerTimersFailure, (state, action) => state),
);

export const timersFeature                       = createFeature({
                                                                   name: timersFeatureKey,
                                                                   reducer,
                                                                 });
export const {selectTimers, selectSelectedTimer} = timersFeature;

