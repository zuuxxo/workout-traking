import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActionHeaderInterface} from '../../domain/features/header/action-header.interface';
import {NavigationHeaderInterface} from '../../domain/features/header/navigation-header.interface';
import {HeaderFacadeService} from '../../domain/features/header/header-facade.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {WorkoutSession} from '../../domain/model/workout-session';
import {WorkoutSessionFacadeService} from '../../domain/features/workout-session/workout-session-facade.service';
import {ViewEnum} from "../../domain/features/header/view.enum";

@Component({
             selector:        'app-workout-session-container',
             templateUrl:     './workout-session-container.component.html',
             styleUrls:       ['./workout-session-container.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutSessionContainerComponent {
  activeWorkoutSession$: Observable<WorkoutSession>;
  navigationsItems: Array<ActionHeaderInterface | NavigationHeaderInterface>;

  constructor(private workoutSessionFacade: WorkoutSessionFacadeService,
              private headerFacade: HeaderFacadeService,
              private router: Router) {
    this.activeWorkoutSession$ = this.workoutSessionFacade.activeSession;
    this.navigationsItems      = this.headerFacade.getHeaderByView(ViewEnum.SESSION);
  }

  // TODO revoir pour quoi les objectifs sont dans le workout actif du store , et du coup l integré dans la vue ?
  // TODO integrer les autres elements de la vue workout sesssion
  // TODO changer les input de type text en type text area
  //  VOir le responsive
  navigationOnClick(item: ActionHeaderInterface | NavigationHeaderInterface) {
    if (item.key === 'NAVIGATION') {
      this.router.navigate([item.payload]);
    }
  }
}
