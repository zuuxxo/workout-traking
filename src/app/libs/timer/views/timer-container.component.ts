import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Timer} from '../domain/model/timer';
import {Observable, of} from 'rxjs';
import {DisplayAllAvailableTimerUseCase} from '../domain/features/display-all-available-timer-use-case';
import {DisplaySelectedTimerUseCase} from '../domain/features/display-selected-timer-use-case';
import {RunSelectedTimerUseCase} from '../domain/features/run-selected-timer-use-case';
import {StatusEnum} from '../data/store/timers.reducer';
import {stopTimerUseCase} from '../domain/features/stop-timer-use-case';
import {DisplayTimerStatusUseCase} from '../domain/features/display-timer-status-use-case';

@Component({
             selector:        'app-timer',
             templateUrl:     './timer-container.component.html',
             styleUrls:       ['./timer-container.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class TimerContainerComponent {
  timers$!: Observable<Array<Timer>> | null;
  selectedTimer$: Observable<number>;
  timerStatus$: Observable<StatusEnum>;

  // TODO gerer une hauteur minimal pour ce module et un max width
  // TODO centrer le bouton stop
  // TODO revoir les responsabilté de chacun

  constructor(private displayTimers: DisplayAllAvailableTimerUseCase,
              private displaySelectedTimer: DisplaySelectedTimerUseCase,
              private runTimer: RunSelectedTimerUseCase,
              private stopTimer: stopTimerUseCase,
              private displayStatus: DisplayTimerStatusUseCase) {
  }

  ngOnInit() {
    this.timers$        = this.displayTimers.execute();
    this.selectedTimer$ = this.displaySelectedTimer.execute();
    this.timerStatus$   = this.displayStatus.execute();

  }

  runSelectedTimer(timer: number) {
    this.runTimer.execute(timer);
  }

  timerEnd(): void {
    this.stopTimer.execute();
  }
}
