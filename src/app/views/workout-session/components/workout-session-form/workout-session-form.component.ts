import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {WorkoutSession} from '../../../../domain/model/workout-session';
import {FormArray, FormGroup} from '@angular/forms';
import {WorkoutSessionFormInterface} from '../../../../libs/forms/interfaces/workout-session-form.interface';
import {WorkoutFormInterface} from '../../../../libs/forms/interfaces/workout-form.interface';
import {WorkoutFormBuilderService} from '../../../../libs/forms/workout-form-builder.service';

@Component({
             selector:        'app-workout-session',
             templateUrl:     './workout-session-form.component.html',
             styleUrls:       ['./workout-session-form.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutSessionFormComponent {
  @Input() workoutSession: WorkoutSession;
  workoutSessionForm: FormGroup<WorkoutSessionFormInterface>;

  constructor(private workoutFormBuilder: WorkoutFormBuilderService,) {
  }

  ngOnInit() {
    console.log('init');
    this.workoutSessionForm = this.workoutSession ? this.workoutFormBuilder.buildWorkoutSessionForm(this.workoutSession)
                                                  : null;
    // this.workoutSessionForm.valueChanges.subscribe((res) => console.log(res));
    //   TODO [Violation] 'click' handler took 293ms
  }

  get workoutSessionFormArray(): FormArray<FormGroup<WorkoutFormInterface>> {
    return this.workoutSessionForm.get('workouts') as FormArray<FormGroup<WorkoutFormInterface>>;
  }
}
