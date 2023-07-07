import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Timer} from '../../domain/model/timer';
import {Observable} from 'rxjs';

@Component({
             selector:        'app-timer-list',
             templateUrl:     './timer-list.component.html',
             styleUrls:       ['./timer-list.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class TimerListComponent {
  @Input() timers!: Array<Timer>;
  @Output() selectTimer: EventEmitter<number>;

  constructor() {
    this.selectTimer = new EventEmitter<number>();
  }

  onSelectTimer(duration) {
    this.selectTimer.emit(duration);
  }
}
