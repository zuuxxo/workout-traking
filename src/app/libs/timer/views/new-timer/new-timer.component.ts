import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DurationValidator} from '../shared/validators/duration.validator';

@Component({
             selector:        'app-new-timer',
             templateUrl:     './new-timer.component.html',
             styleUrls:       ['./new-timer.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class NewTimerComponent {
  form: FormGroup;
  @Output() newTimer: EventEmitter<{ minutes: number, secondes: number }>;

  constructor(private fb: FormBuilder) {
    this.form     = this.fb.group({
                                    minutes:  [null, [DurationValidator()]],
                                    secondes: [null, [DurationValidator()]]
                                  });
    this.newTimer = new EventEmitter();
  }

  get minutes(): AbstractControl {
    return this.form.get('minutes');
  }

  get secondes(): AbstractControl {
    return this.form.get('secondes');
  }

  addTimer() {
    if (this.minutes.valid || this.secondes.valid) {
      this.newTimer.emit(this.form.value);
    }
  }
}
