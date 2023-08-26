import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Workout} from '../../domain/model/workout';
import {Serie} from '../../domain/model/serie';
import {WorkoutFormInterface} from '../../views/workout-session/components/workout-form/workout-form.interface';
import {SerieFormInterface} from '../forms/serie-form/serie-form.interface';
import {WorkoutSessionFormInterface} from '../forms/workout-session-form.interface';
import {WorkoutSessionModel} from '../../domain/model/workout-session-model';
import {WorkoutModel} from '../../domain/model/workout-model';
import {workoutModelForm, WorkoutSessionModelFormInterface} from './workout-session-model-form.interface';

@Injectable({
              providedIn: 'root'
            })
export class WorkoutFormBuilderService {

  buildWorkoutSessionForm(workouts: Workout[]): FormGroup<WorkoutSessionFormInterface> {
    const formArray = new FormArray<FormGroup<WorkoutFormInterface>>([]);
    workouts.forEach((workout: Workout) => {
      formArray.push(this.buildWorkoutForm(workout));
    });
    return new FormGroup({
                           workoutSession: formArray
                         });
  }

  private buildWorkoutForm(workout: Workout): FormGroup<WorkoutFormInterface> {
    return new FormGroup({
                           title:    new FormControl(workout.title),
                           series:   this.buildSeriesForm(workout.series),
                           comments: new FormControl(workout.comments)
                         });
  }

  private buildSeriesForm(series: Serie[]): FormArray<FormGroup<SerieFormInterface>> {
    const form = new FormArray<FormGroup<SerieFormInterface>>([]);
    series.forEach((serie: Serie) => {
      form.push(this.buildSerieForm(serie));
    });
    return form;
  }

  private buildSerieForm(serie: Serie): FormGroup<SerieFormInterface> {
    return new FormGroup({
                           weight: new FormControl(serie?.weight),
                           reps:   new FormControl(serie?.reps),
                           rest:   new FormControl(serie?.rest)
                         });
  }

  public buildWorkoutSessionModelForm(model: WorkoutSessionModel): FormGroup<WorkoutSessionModelFormInterface> {
    return new FormGroup({
                           title:    new FormControl<string>(model?.title),
                           workouts: model ?
                                     this.buildWorkoutModelFormArray(model.workouts) :
                                     new FormControl([]) as unknown as FormArray<FormGroup<workoutModelForm>>,
                           comments: new FormControl<string>(model?.comments)
                         });
  }

  private buildWorkoutModelFormArray(workouts: WorkoutModel[]): FormArray<FormGroup<workoutModelForm>> {
    const formArray = new FormArray([]);
    if (workouts) {
      workouts.forEach((workoutModel: WorkoutModel) => {
        const form = this.buildWorkoutModelForm(workoutModel);
        formArray.push(form);
      });
    } else {
      formArray.push(this.buildWorkoutModelForm());
    }
    return formArray;
  }

  public buildWorkoutModelForm(workoutModel?: WorkoutModel) {
    return new FormGroup({
                           title:       new FormControl(workoutModel?.title),
                           serieNumber: new FormControl(workoutModel?.seriesNumber),
                           objectifs:   this.buildSerieForm(workoutModel?.objectifs)
                         });
  }
}

