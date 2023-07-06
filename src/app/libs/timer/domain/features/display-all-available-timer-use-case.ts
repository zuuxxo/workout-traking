import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectTimers} from '../../data/store/timers.reducer';
import {Observable} from 'rxjs';
import {Timer} from '../model/timer';


@Injectable()
export class DisplayAllAvailableTimerUseCase {

  constructor(private store: Store) {
  }

  execute(): Observable<Array<Timer>> {
    return this.store.select(selectTimers);
  }

}
