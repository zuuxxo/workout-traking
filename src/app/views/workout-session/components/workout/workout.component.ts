import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Workout} from '../../../../domain/model/workout';

@Component({
             selector:        'app-workout',
             templateUrl:     './workout.component.html',
             styleUrls:       ['./workout.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutComponent {
  @Input() workout: Workout;
}
