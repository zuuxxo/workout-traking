import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {WorkoutFormBuilderService} from '../../../../libs/services/workout-form-builder.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {WorkoutSessionModel} from '../../../../domain/model/workout-session-model';
import {FormGroup} from '@angular/forms';
import {WorkoutSessionModelFormInterface} from '../../../../libs/services/workout-session-model-form.interface';

@Component({
             selector:        'app-workout-session-form',
             templateUrl:     './workout-session-model-form.component.html',
             styleUrls:       ['./workout-session-model-form.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutSessionModelFormComponent {
//   creer un formulaire a partir de donnée passer en data
  /*
   * inmputs titre
   * formArray pour les workouts
   *   input titre de l exercice
   *   input pour le nb de serie
   *   des inputs pour les objectifs
   * inputs pour les comments
   *
   * */
  form: FormGroup<WorkoutSessionModelFormInterface>;

  constructor(private workoutFormBuilder: WorkoutFormBuilderService,
              @Inject(MAT_DIALOG_DATA) public model: WorkoutSessionModel) {
    this.form = this.workoutFormBuilder.buildWorkoutSessionModelForm(model);
  }

  ngOnInit() {
    console.log(this.form);

  }
}
