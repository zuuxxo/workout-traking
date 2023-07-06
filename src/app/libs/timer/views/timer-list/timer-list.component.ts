import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
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

}
