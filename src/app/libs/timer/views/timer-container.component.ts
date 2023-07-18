import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Timer} from '../domain/model/timer';
import {Observable} from 'rxjs';
import {StatusEnum} from '../data/store/timers.reducer';
import {TimerFacadeService} from '../domain/features/timerFacade.service';

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

  // TODO revoir les responsabilté de chacun
  // TODO revoir le nommage
  constructor(private timerFacadeService: TimerFacadeService,) {
  }

  ngOnInit() {
    this.timers$        = this.timerFacadeService.timers;
    this.selectedTimer$ = this.timerFacadeService.selectedTimer;
    this.timerStatus$   = this.timerFacadeService.timerStatus;
  }

  runSelectedTimer(timer: number): void {
    this.timerFacadeService.runSelectedTimer(timer);
  }

  stopTimerExecution(): void {
    this.timerFacadeService.stopTimerExecution();
  }

  addNewTimer(time: { minutes: number, secondes: number }): void {
    this.timerFacadeService.addNewTimer(time);
  }
}
