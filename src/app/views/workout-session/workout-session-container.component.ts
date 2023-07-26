import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WorkoutSessionFacadeService} from './workout-session-facade.service';
import {FormArray, FormGroup} from '@angular/forms';
import {WorkoutFormInterface} from '../../libs/forms/workout-form/workout-form.interface';
import {WorkoutSessionFormInterface} from '../../libs/forms/workout-session-form.interface';

@Component({
             selector:        'app-workout-session-container',
             templateUrl:     './workout-session-container.component.html',
             styleUrls:       ['./workout-session-container.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutSessionContainerComponent {
  workoutSessionForm: FormGroup<WorkoutSessionFormInterface>;

  constructor(private workoutSessionFacade: WorkoutSessionFacadeService) {
  }

  ngOnInit() {
    this.workoutSessionForm = this.workoutSessionFacade.getWorkouSessionForm();
    this.workoutSessionForm.valueChanges.subscribe((v) => console.log(v));
    console.log(this.workoutSessionFormArray);
  }

  get workoutSessionFormArray(): FormArray<FormGroup<WorkoutFormInterface>> {
    return this.workoutSessionForm.get('workoutSession') as FormArray<FormGroup<WorkoutFormInterface>>;
  }
}
