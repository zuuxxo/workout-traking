import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {WorkoutSessionModel} from '../../../../domain/model/workout-session-model';

@Component({
             selector:        'app-workout-session-model',
             templateUrl:     './workout-session-model.component.html',
             styleUrls:       ['./workout-session-model.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutSessionModelComponent {
  @Input() workoutSessionModel: WorkoutSessionModel;
}
