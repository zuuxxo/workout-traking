import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {WorkoutFormBuilderService} from '../../../../libs/forms/workout-form-builder.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {WorkoutSessionModel} from '../../../../domain/model/workout-session-model';
import {FormArray, FormGroup} from '@angular/forms';
import {
  workoutModelForm,
  WorkoutSessionModelFormInterface
} from '../../../../libs/forms/interfaces/workout-session-model-form.interface';
import {WorkoutModel} from "../../../../domain/model/workout-model";

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

  addWorkout(): void {
    this.workouts.push(this.workoutFormBuilder.buildWorkoutModelForm());
  }

  deleteWorkout(workoutIndex: number): void {
    this.workouts.removeAt(workoutIndex);
  }

  parseToWorkingSessionModel(value): WorkoutSessionModel {
    return {
      title:    value.title,
      workouts: value.workouts.map((workout): WorkoutModel => ({
        title:        workout.title,
        seriesNumber: Number(workout.seriesNumber),
        objectifs:    {
          weight: Number(workout.objectifs.weight),
          reps:   Number(workout.objectifs.reps),
          rest:   Number(workout.objectifs.rest)
        }
      })),
      comments: value.comments
    } as WorkoutSessionModel
  }
}
