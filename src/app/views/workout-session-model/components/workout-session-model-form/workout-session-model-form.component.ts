import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {WorkoutFormBuilderService} from '../../../../libs/forms/workout-form-builder.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {WorkoutSessionModel} from '../../../../domain/model/workout-session-model';
import {FormArray, FormGroup} from '@angular/forms';
import {
  workoutModelForm,
  WorkoutSessionModelFormInterface
} from '../../../../libs/forms/interfaces/workout-session-model-form.interface';

@Component({
             selector:        'app-workout-session-form',
             templateUrl:     './workout-session-model-form.component.html',
             styleUrls:       ['./workout-session-model-form.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutSessionModelFormComponent {
//   TODO refacto le scss
  form: FormGroup<WorkoutSessionModelFormInterface>;

  constructor(private workoutFormBuilder: WorkoutFormBuilderService,
              @Inject(MAT_DIALOG_DATA) public model: WorkoutSessionModel) {
    this.form = this.workoutFormBuilder.buildWorkoutSessionModelForm(model);
  }

  get workouts(): FormArray<FormGroup<workoutModelForm>> {
    return this.form.get('workouts') as FormArray<FormGroup<workoutModelForm>>;
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((res) => console.log(res));
  }

  addWorkout(): void {
    this.workouts.push(this.workoutFormBuilder.buildWorkoutModelForm());
  }

  deleteWorkout(workoutIndex: number): void {
    this.workouts.removeAt(workoutIndex);
  }
}
