import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {selectSelectedTimer, State} from '../../data/store/timers.reducer';

@Injectable()
export class DisplaySelectedTimerUseCase {

  constructor(private store: Store) {
  }

  execute(): Observable<number> {
    return this.store.select(selectSelectedTimer);
    // return this.store.pipe(map((state: { timers: State }) => state.timers.selectedTimer));
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
