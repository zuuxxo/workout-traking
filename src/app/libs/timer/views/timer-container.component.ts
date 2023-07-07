import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Timer} from '../domain/model/timer';
import {Observable, of} from 'rxjs';
import {DisplayAllAvailableTimerUseCase} from '../domain/features/display-all-available-timer-use-case';
import {DisplaySelectedTimerUseCase} from '../domain/features/display-selected-timer-use-case';
import {RunSelectedTimerUseCase} from '../domain/features/run-selected-timer-use-case';

@Component({
             selector:        'app-timer',
             templateUrl:     './timer-container.component.html',
             styleUrls:       ['./timer-container.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class TimerContainerComponent {
  timers$!: Observable<Array<Timer>> | null;
  selectedTimer$: Observable<number>;

  constructor(private displayTimers: DisplayAllAvailableTimerUseCase,
              private displaySelectedTimer: DisplaySelectedTimerUseCase,
              private runTimer: RunSelectedTimerUseCase) {
  }

  ngOnInit() {
    this.timers$        = this.displayTimers.execute();
    this.selectedTimer$ = this.displaySelectedTimer.execute();
  }

  runSelectedTimer(timer: number) {
    this.runTimer.execute(timer);
  }
}
