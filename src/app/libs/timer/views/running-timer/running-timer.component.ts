import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Observable, switchMap, take, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
             selector:        'app-running-timer',
             templateUrl:     './running-timer.component.html',
             styleUrls:       ['./running-timer.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class RunningTimerComponent {
  @Input() selectedTimer$: Observable<number>;
  runningTimer$: Observable<number>;

  // time: Observable<number>;

  constructor() {
    // const start = 60;
    /*    this.time   =
     timer(1000, 1000).pipe(
     map((i => start - i)),
     take(start + 1)
     );*/
  }

  ngOnInit() {
    this.runningTimer$ = this.selectedTimer$.pipe(
      switchMap((selectedTimer) => {
        return timer(1000, 1000).pipe(
          map((i => selectedTimer - i)),
          take(selectedTimer + 1)
        );
      })
    );

  }

}
