import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {TimersActions} from '../../data/store/timers.reducer';

@Injectable()
export class stopTimerUseCase {
  constructor(private store: Store) {

  }

  execute(): void {
    this.store.dispatch(TimersActions.stopTimer());
  }
}
