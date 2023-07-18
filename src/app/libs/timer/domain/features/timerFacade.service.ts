import {Injectable} from '@angular/core';
import {DisplayAllAvailableTimerUseCase} from './display-all-available-timer-use-case';
import {DisplaySelectedTimerUseCase} from './display-selected-timer-use-case';
import {RunSelectedTimerUseCase} from './run-selected-timer-use-case';
import {stopTimerUseCase} from './stop-timer-use-case';
import {DisplayTimerStatusUseCase} from './display-timer-status-use-case';
import {AddNewTimerUseCase} from './add-new-timer-use-case';
import {Observable} from 'rxjs';
import {Timer} from '../model/timer';
import {StatusEnum} from '../../data/store/timers.reducer';

@Injectable()
export class TimerFacadeService {

  constructor(private displayTimers: DisplayAllAvailableTimerUseCase,
              private displaySelectedTimer: DisplaySelectedTimerUseCase,
              private runTimer: RunSelectedTimerUseCase,
              private stopTimer: stopTimerUseCase,
              private displayStatus: DisplayTimerStatusUseCase,
              private addTimer: AddNewTimerUseCase) {
  }

  get selectedTimer(): Observable<number> {
    return this.displaySelectedTimer.execute();
  }

  get timers(): Observable<Timer[]> {
    return this.displayTimers.execute();
  }

  get timerStatus(): Observable<StatusEnum> {
    return this.displayStatus.execute();
  }

  runSelectedTimer(timer: number): void {
    this.runTimer.execute(timer);
  }

  stopTimerExecution(): void {
    this.stopTimer.execute();
  }

  addNewTimer(time: { minutes: number, secondes: number }): void {
    this.addTimer.execute(time);
  }

}
