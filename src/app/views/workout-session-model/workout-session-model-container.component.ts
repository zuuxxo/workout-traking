import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {WorkoutSessionModel} from '../../domain/model/workout-session-model';
import {
  WorkoutSessionModelFacadeService
} from '../../domain/features/workout-session-model/workout-session-model-facade.service';
import {ActionHeaderInterface} from '../../domain/features/header/action-header.interface';
import {NavigationHeaderInterface} from '../../domain/features/header/navigation-header.interface';
import {ActionModelsHeader} from '../../domain/features/header/models-header.constant';
import {Router} from '@angular/router';
import {HeaderFacadeService} from '../../domain/features/header/header-facade.service';
import {ContainerWithHeaderAbstractComponent} from '../container-with-header.abstract.component';
import {MatDialog} from '@angular/material/dialog';
import {
  WorkoutSessionModelFormComponent
} from './components/workout-session-model-form/workout-session-model-form.component';

@Component({
             selector:        'app-workout-session-model-container',
             templateUrl:     './workout-session-model-container.component.html',
             styleUrls:       ['./workout-session-model-container.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutSessionModelContainerComponent extends ContainerWithHeaderAbstractComponent {
  // TODO deplacer les facades dans les uses cases ? ou ailleurs pour les reuntiliser.
  // TODO creer une interface a implementer pour les use case
  // creer la possibilité de creer un modele a partir d un entraienement deja realsies
  // creer une page pour gerer l affichage des entraienements realises
  //  revoir les uses case et code base  du header  pas assez dry
  // TODO revoir le responsive de cette vue y compris la modal de formulaire

  workoutSessionModels$: Observable<WorkoutSessionModel[]>;
  navigationsItems: Array<ActionHeaderInterface | NavigationHeaderInterface>;

  constructor(private workoutSessionModelFacade: WorkoutSessionModelFacadeService,
              private headerFacade: HeaderFacadeService,
              private router: Router,
              public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.navigationsItems      = this.headerFacade.getHeaderByView(this.view.key);
    this.workoutSessionModels$ = this.workoutSessionModelFacade.workoutSessionModels;
    this.workoutSessionModels$.subscribe((res) => console.log(res));
  }


  navigationOnClick(item: ActionHeaderInterface | NavigationHeaderInterface): void {
    if (item.key === 'NAVIGATION') {
      this.router.navigate([item.payload]);
    }
    if (item.key === 'ACTION') {
      switch (item.payload) {
        case ActionModelsHeader.FREE_WORKOUT:
          //     j appelle la facade pour le use Case
          break;
        case ActionModelsHeader.NEW_MODEL:
          const dialogRef = this.dialog.open(WorkoutSessionModelFormComponent,
                                             {data: {}, disableClose: true, height: '600px'});
          dialogRef.afterClosed().subscribe((result: WorkoutSessionModel) => {
            console.log(result, 'new');
            this.workoutSessionModelFacade.newWorkoutSessionModel(result);
          });
          break;

      }
    }
  }

  identify(index: number, model: WorkoutSessionModel): string {
    return model.id;
  }

  deleteWorkoutSessionModel(id: string): void {
    this.workoutSessionModelFacade.deleteWorkoutSessionModel(id);
  }

  updateWorkoutSessionModel(model: WorkoutSessionModel): void {
    const dialogRef = this.dialog.open(WorkoutSessionModelFormComponent,
                                       {data: model, disableClose: true, height: '600px'});
    dialogRef.afterClosed().subscribe((result: WorkoutSessionModel) => {
      console.log(result, 'update');
      this.workoutSessionModelFacade.updateWorkoutSessionModel(result);
    });
  }
}
