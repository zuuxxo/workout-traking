import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {selectStatus, StatusEnum} from '../../data/store/timers.reducer';

@Injectable()
export class DisplayTimerStatusUseCase {
  constructor(private store: Store) {
  }

  execute(): Observable<StatusEnum> {
    return this.store.select(selectStatus);
  }
}
