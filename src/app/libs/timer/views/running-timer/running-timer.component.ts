import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Observable, switchMap, take, tap, timer} from 'rxjs';
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

  // TODO voir le pb de call deux fois le selecteur
  //  TODO voir ce que je fais quand il est à 0
  constructor() {
  }

  ngOnInit() {
    this.runningTimer$ = this.selectedTimer$.pipe(
      tap((i) => console.log({i})),
      switchMap((selectedTimer) => {
        return timer(0, 1000).pipe(
          map((i => selectedTimer - i)),
          take(selectedTimer + 1)
        );
      })
    );
  }

}
