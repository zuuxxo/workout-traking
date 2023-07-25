import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Workout} from '../../domain/model/workout';
import {WorkoutSessionFacadeService} from './workout-session-facade.service';
import {FormArray, FormControl} from '@angular/forms';

@Component({
             selector:        'app-workout-session-container',
             templateUrl:     './workout-session-container.component.html',
             styleUrls:       ['./workout-session-container.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutSessionContainerComponent {
  workoutSessionForm: FormArray;
  test = new FormControl('test');

  constructor(private workoutSessionFacade: WorkoutSessionFacadeService) {
  }

  ngOnInit() {
    this.workoutSessionForm = this.workoutSessionFacade.getWorkouSessionForm();
    this.test.valueChanges.subscribe((v) => console.log(v));
  }
}
