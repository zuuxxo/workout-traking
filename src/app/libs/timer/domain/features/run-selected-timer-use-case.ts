import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {TimersActions} from '../../data/store/timers.reducer';

@Injectable()
export class RunSelectedTimerUseCase {
  constructor(private store: Store) {
  }

  execute(selectedTimer: number): void {
    this.store.dispatch(TimersActions.runTimer({selectedTimer}));
  }

}
