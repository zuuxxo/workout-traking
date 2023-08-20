import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WorkoutSessionFacadeService} from './workout-session-facade.service';
import {FormArray, FormGroup} from '@angular/forms';
import {WorkoutFormInterface} from '../../libs/forms/workout-form/workout-form.interface';
import {WorkoutSessionFormInterface} from '../../libs/forms/workout-session-form.interface';
import {ContainerWithHeaderAbstractComponent} from '../container-with-header.abstract.component';
import {ActionHeaderInterface} from '../../domain/features/header/action-header.interface';
import {NavigationHeaderInterface} from '../../domain/features/header/navigation-header.interface';
import {HeaderFacadeService} from '../../domain/features/header/header-facade.service';
import {Router} from '@angular/router';

@Component({
             selector:        'app-workout-session-container',
             templateUrl:     './workout-session-container.component.html',
             styleUrls:       ['./workout-session-container.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class WorkoutSessionContainerComponent extends ContainerWithHeaderAbstractComponent {
  workoutSessionForm: FormGroup<WorkoutSessionFormInterface>;
  navigationsItems: Array<ActionHeaderInterface | NavigationHeaderInterface>;

  constructor(private workoutSessionFacade: WorkoutSessionFacadeService,
              private headerFacade: HeaderFacadeService,
              private router: Router) {
    super();
  }


  ngOnInit() {
    this.workoutSessionForm = this.workoutSessionFacade.getWorkouSessionForm();
    this.navigationsItems   = this.headerFacade.getHeaderByView(this.view.key);

    this.workoutSessionFormArray.valueChanges.subscribe((v) => console.log(v));
  }

  get workoutSessionFormArray(): FormArray<FormGroup<WorkoutFormInterface>> {
    return this.workoutSessionForm.get('workoutSession') as FormArray<FormGroup<WorkoutFormInterface>>;
  }

  navigationOnClick(item: ActionHeaderInterface | NavigationHeaderInterface) {
    if (item.key === 'NAVIGATION') {
      this.router.navigate([item.payload]);
    }
  }
}
