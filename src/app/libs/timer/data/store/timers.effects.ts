import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap} from 'rxjs/operators';
import {Observable, EMPTY, of} from 'rxjs';
import {TimersActions} from './timers.reducer';


@Injectable()
export class TimersEffects {

/*  timerTimerss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TimersActions.timerTimers),
      concatMap(() =>
                  /!** An EMPTY observable only emits completion. Replace with your own observable API request *!/
                  EMPTY.pipe(
                    map(data => TimersActions.timerTimersSuccess({data})),
                    catchError(error => of(TimersActions.timerTimersFailure({error}))))
      )
    );
  });*/


  constructor(private actions$: Actions) {
  }
}
