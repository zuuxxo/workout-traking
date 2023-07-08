import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {BehaviorSubject, filter, finalize, Observable, switchMap, take, tap, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
             selector:        'app-running-timer',
             templateUrl:     './running-timer.component.html',
             styleUrls:       ['./running-timer.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class RunningTimerComponent {
  @Input() selectedTimer$: Observable<number>;
  @Output() timerEnd: EventEmitter<void>;
  runningTimer$: Observable<number>;

  constructor() {
    this.timerEnd = new EventEmitter<void>();
  }

  ngOnInit() {
    this.runningTimer$ = this.selectedTimer$.pipe(
      filter((selectedTimer) => selectedTimer !== null),
      switchMap((selectedTimer) => {
        return timer(0, 1000).pipe(
          map((i => selectedTimer - i)),
          take(selectedTimer + 1),
          finalize(() => this.timerEnd.emit())
        );
      })
    );
  }

}
