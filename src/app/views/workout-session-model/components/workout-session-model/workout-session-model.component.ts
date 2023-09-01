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
  @Output() editEvent: EventEmitter<WorkoutSessionModel>;
  @Output() selectEvent: EventEmitter<WorkoutSessionModel>;

  constructor() {
    this.deleteEvent = new EventEmitter<string>();
    this.editEvent   = new EventEmitter<WorkoutSessionModel>();
    this.selectEvent = new EventEmitter<WorkoutSessionModel>();
  }

  deleteModel(id: string): void {
    this.deleteEvent.emit(id);
  }

  editModel(workoutSessionModel: WorkoutSessionModel): void {
    this.editEvent.emit(workoutSessionModel);
  }

  selectModel(workoutSessionModel: WorkoutSessionModel): void {
    this.selectEvent.emit(workoutSessionModel);
  }
}
