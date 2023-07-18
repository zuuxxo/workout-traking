import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Workout} from '../../domain/model/workout';

@Component({
             selector:        'app-workout-session-container',
             templateUrl:     './workout-session-container.component.html',
             styleUrls:       ['./workout-session-container.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutSessionContainerComponent {
  workout: Workout = {
    title:    'Développé couché',
    series:   [{rest: 12, reps: 30, weight: 0}, {rest: 12, reps: 30, weight: 0}, {rest: 12, reps: 30, weight: 0}],
    comments: 'augmenter le nombre de series'
  };

}
