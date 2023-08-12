import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {WorkoutSessionModel} from '../../domain/model/workout-session-model';
import {
  WorkoutSessionModelFacadeService
} from '../../domain/features/workout-session-model/workout-session-model-facade.service';

@Component({
  selector: 'app-workout-session-model-container',
  templateUrl: './workout-session-model-container.component.html',
  styleUrls: ['./workout-session-model-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutSessionModelContainerComponent {
  // TODO deplacer les facades dans les uses cases ? ou ailleurs pour les reuntiliser.
  // TODO ajouter date de creation et commentaires  au model d entrainement
  // TODO creer une interface a implementer pour les use case
  // creer la possibilité de creer un modele a partir d un entraienement deja realsies
  // creer une page pour gerer l affichage des entraienements realises

  workoutSessionModels$: Observable<WorkoutSessionModel[]>;

  constructor(private workoutSessionModelFacade: WorkoutSessionModelFacadeService) {
  }

  ngOnInit() {
    this.workoutSessionModels$ = this.workoutSessionModelFacade.workoutSessionModels;
    this.workoutSessionModels$.subscribe((res) => console.log(res));
  }


}
