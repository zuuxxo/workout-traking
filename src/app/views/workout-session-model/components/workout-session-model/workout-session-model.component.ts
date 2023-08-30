import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {WorkoutSessionModel} from '../../../../domain/model/workout-session-model';

@Component({
             selector:        'app-workout-session-model',
             templateUrl:     './workout-session-model.component.html',
             styleUrls:       ['./workout-session-model.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutSessionModelComponent {
  @Input() workoutSessionModel: WorkoutSessionModel;
  @Output() deleteEvent: EventEmitter<string>;

  constructor() {
    this.deleteEvent = new EventEmitter<string>();
  }

  deleteModel(id: string): void {
    this.deleteEvent.emit(id);
  }
}
