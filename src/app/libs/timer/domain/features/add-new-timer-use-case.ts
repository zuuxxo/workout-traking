import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectTimers, TimersActions} from '../../data/store/timers.reducer';
import {Timer} from '../model/timer';
import {take} from 'rxjs';

@Injectable()
export class AddNewTimerUseCase {

  constructor(private store: Store) {
  }

  execute(time: { minutes: number, secondes: number }): void {
    this.store.select(selectTimers)
        .pipe(take(1))
        .subscribe((timers: Timer[]) => {
          const duration = (time.minutes * 60) + time.secondes;
          const timer    = new Timer(duration);
          if (!this.isTimerAlreadyExist(timers, timer)) {
            const newTimers = this.addNewTimer(timers, timer);
            this.store.dispatch(TimersActions.newTimers({timers: newTimers}));
          }
        });
  }

  isTimerAlreadyExist(timers: Timer[], timer: Timer): boolean {
    return !!timers.find((t: Timer) => t.duration === timer.duration);
  }

  static isValidDuration(duration: number): boolean {
    return duration > 0 && duration <= 60;
  }

  private addNewTimer(timers: Timer[], timer: Timer): Timer[] {
    const newTimers = timers.slice(0, -1);
    newTimers.unshift(timer);
    return newTimers;
  }
}
