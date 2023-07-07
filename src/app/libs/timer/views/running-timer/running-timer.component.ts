import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-running-timer',
  templateUrl: './running-timer.component.html',
  styleUrls: ['./running-timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RunningTimerComponent {

}
