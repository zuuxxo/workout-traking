import {Injectable} from '@angular/core';
import {selectWorkoutSessionModels} from '../../../data/store/selectors/workout-session-model.selectors';
import {Observable} from 'rxjs';
import {WorkoutSessionModel} from '../../model/workout-session-model';
import {Store} from '@ngrx/store';

@Injectable({providedIn: 'root'})
export class DisplayWorkoutSessionModelsUseCase {

  constructor(private store: Store) {
  }

  // TODO les trier du plus recent au plus ancien
  // TODO voir par la suite si je rajoute pas des filtres
  execute(): Observable<WorkoutSessionModel[]> {
    return this.store.select(selectWorkoutSessionModels);
  }
}
