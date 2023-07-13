import {createActionGroup, createFeature, createReducer, emptyProps, on, props} from '@ngrx/store';
import {Timer} from '../../domain/model/timer';

export const TimersActions    = createActionGroup({
                                                    source: 'Timers',
                                                    events: {
                                                      runTimer:  props<{ selectedTimer: number }>(),
                                                      stopTimer: emptyProps,
                                                      newTimer:  props<{ timer: Timer }>()
                                                    }
                                                  });
export const timersFeatureKey = 'timers';

export const enum StatusEnum {
  START = 'START',
  STOP  = 'STOP'
}

export interface State {
  timers: Array<Timer>;
  selectedTimer: number;
  status: StatusEnum;
}

export const initialState: State = {
  timers:        [{duration: 5},
                  {duration: 15},
                  {duration: 30},
                  {duration: 60},
                  {duration: 90},
                  {duration: 120},
                  {duration: 150},
                  {duration: 180}],
  selectedTimer: null,
  status:        StatusEnum.STOP
};

export const reducer = createReducer(
  initialState,
  on(TimersActions.runTimer,
     (state, {selectedTimer}) => ({...state, selectedTimer: selectedTimer, status: StatusEnum.START})),
  on(TimersActions.stopTimer,
     (state) => ({...state, status: StatusEnum.STOP})),
  on(TimersActions.newTimer,
     (state, {timer}) => {
       const newTimers = state.timers.slice(0, -1);
       console.log(newTimers);
       newTimers.unshift(timer);
       console.log(newTimers);
       return {...state, timers: newTimers};
     }),
);

export const timersFeature                                     = createFeature({
                                                                                 name: timersFeatureKey,
                                                                                 reducer,
                                                                               });
export const {selectTimers, selectSelectedTimer, selectStatus} = timersFeature;


