import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Workout} from '../../domain/model/workout';
import {Serie} from '../../domain/model/serie';
import {WorkoutFormInterface} from './workout-form/workout-form.interface';
import {SerieFormInterface} from './serie-form/serie-form.interface';
import {WorkoutSessionFormInterface} from './workout-session-form.interface';

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
                           weight: new FormControl(serie.weight),
                           reps:   new FormControl(serie.reps),
                           rest:   new FormControl(serie.rest)
                         });
  }

}

