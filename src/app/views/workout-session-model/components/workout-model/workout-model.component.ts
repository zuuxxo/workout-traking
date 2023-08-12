import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {WorkoutModel} from '../../../../domain/model/workout-model';

@Component({
             selector:        'app-workout-model',
             templateUrl:     './workout-model.component.html',
             styleUrls:       ['./workout-model.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutModelComponent {
  @Input() workoutModel: WorkoutModel;
}
