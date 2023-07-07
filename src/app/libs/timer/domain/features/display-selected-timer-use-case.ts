import {Injectable} from '@angular/core';
import {Observable, switchMap, take, timer} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {selectSelectedTimer} from '../../data/store/timers.reducer';

@Injectable()
export class DisplaySelectedTimerUseCase {

  constructor(private store: Store) {
  }

  execute(): Observable<number> {
    return this.store.select(selectSelectedTimer)
      /*         .pipe(
      switchMap((selectedTimer) => {
        return timer(1000, 1000).pipe(
          map((i => selectedTimer - i)),
          take(selectedTimer + 1)
        );
      })
    );*/
  }

}
