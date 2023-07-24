import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Workout} from '../../domain/model/workout';
import {Serie} from '../../domain/model/serie';

@Injectable({
              providedIn: 'root'
            })
export class WorkoutFormBuilderService {
  // TODO revoir les typed Form
  constructor() {
  }

  buildWorkoutSessionForm(workouts: Workout[]): FormArray {
    const form = new FormArray([]);
    workouts.forEach((workout: Workout) => {
      form.push(this.buildWorkoutForm(workout));
    });
    return form;
  }

  private buildWorkoutForm(workout: Workout): FormGroup {
    return new FormGroup({
                           title:    new FormControl(workout.title),
                           series:   this.buildSeriesForm(workout.series),
                           comments: new FormControl(workout.comments)
                         });
  }

  private buildSeriesForm(series: Serie[]): FormArray {
    const form = new FormArray([]);
    series.forEach((serie: Serie) => {
      form.push(this.buildSerieForm(serie));
    });
    return form;
  }

  private buildSerieForm(serie: Serie): FormGroup {
    return new FormGroup({
                           weight: new FormControl(serie.weight),
                           reps:   new FormControl(serie.reps),
                           rest:   new FormControl(serie.rest)
                         });
  }

}

