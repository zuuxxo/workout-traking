import {Injectable} from '@angular/core';
import {Workout} from '../../domain/model/workout';
import {WorkoutFormBuilderService} from '../../libs/services/workout-form-builder.service';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {WorkoutFormInterface} from './components/workout-form/workout-form.interface';
import {WorkoutSessionFormInterface} from '../../libs/forms/workout-session-form.interface';

@Injectable({
              providedIn: 'root'
            })
export class WorkoutSessionFacadeService {

  workouts: Workout[] = [{
    title:    'Développé couché',
    series:   [{rest: 12, reps: 30, weight: 0}, {rest: 12, reps: 30, weight: 0}, {rest: 12, reps: 30, weight: 0}],
    comments: 'augmenter le nombre de series'
  }, {
    title:    'Développé incline',
    series:   [{rest: 12, reps: 30, weight: 0}, {rest: 12, reps: 30, weight: 0}, {rest: 12, reps: 30, weight: 0}],
    comments: 'augmenter le nombre de series'
  }, {
    title:    'Développé decliné',
    series:   [{rest: 12, reps: 30, weight: 0}, {rest: 12, reps: 30, weight: 0}, {rest: 12, reps: 30, weight: 0}],
    comments: 'augmenter le nombre de series'
  }];

//   features
//   je veux display un workout
  // je veux pouvoir ajouter une serie a un exercice
  // je veux pouvoir suprimer une serie
  // je veux pouvoir modifier une serie
  //je veux pouvoir enregistrer mon workout

  constructor(private workoutFormBuilder: WorkoutFormBuilderService) {
  }

  getWorkouSessionForm(): FormGroup<WorkoutSessionFormInterface> {
    return this.workoutFormBuilder.buildWorkoutSessionForm(this.workouts);
  }


}
