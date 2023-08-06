import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WorkoutSessionModelFacadeService} from './workout-session-model-facade.service';
import {WorkoutSessionModel} from '../../domain/model/workout-session-model';
import {Observable} from 'rxjs';

@Component({
             selector:        'app-home-container',
             templateUrl:     './home-container.component.html',
             styleUrls:       ['./home-container.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class HomeContainerComponent {
  // TODO deplacer les facades dans les uses cases ? ou ailleurs pour les reuntiliser.
  // TODO ajouter date de creation et commentaires  au model d entrainement
  // TODO creer une interface a implementer pour les use case
  // TODO revoir home qui sera la page de login
  //creer une page entiere pour la gestion des models avec plusieurs compos
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
