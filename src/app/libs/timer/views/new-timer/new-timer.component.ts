import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DurationValidator} from '../shared/validators/duration.validator';

@Component({
             selector:        'app-new-timer',
             templateUrl:     './new-timer.component.html',
             styleUrls:       ['./new-timer.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class NewTimerComponent {
  form: FormGroup;
  @Output() newTimer: EventEmitter<number>;

  constructor(private fb: FormBuilder) {
    this.form     = this.fb.group({
                                    minutes:  [null, [DurationValidator()]],
                                    secondes: [null, [DurationValidator()]]
                                  });
    this.newTimer = new EventEmitter();
  }


  addTimer() {
    if (this.form.valid) {
      const {minutes, secondes} = this.form.value;
      console.log(minutes, secondes);
      if (minutes || secondes) {
        const time = (minutes * 60) + secondes;
        console.log(time);
        this.newTimer.emit(time);
      }
    }

  }
}
