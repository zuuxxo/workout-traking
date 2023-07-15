import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectTimers, TimersActions} from '../../data/store/timers.reducer';
import {Timer} from '../model/timer';
import {take} from 'rxjs';

@Injectable()
export class AddNewTimerUseCase {

  constructor(private store: Store) {

  }

  execute(timer: Timer): void {
    this.store.select(selectTimers)
        .pipe(take(1))
        .subscribe((timers: Timer[]) => {
          if (!this.isTimerAlreadyExist(timers, timer)) {
            this.store.dispatch(TimersActions.newTimer({timer: timer}));
          }
        });
  }

  isTimerAlreadyExist(timers: Timer[], timer: Timer): boolean {
    return !!timers.find((t: Timer) => t.duration === timer.duration);
  }

  static isValidDuration(duration: number): boolean {
    return duration > 0 && duration <= 60;
  }

}
