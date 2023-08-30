import {Injectable} from '@angular/core';
import {WorkoutSessionModel} from '../../model/workout-session-model';
import {Observable} from 'rxjs';
import {DisplayWorkoutSessionModelsUseCase} from './display-workout-session-models-use-case';
import {NewWorkoutSessionModelUseCase} from './new-workout-session-model-use-case';
import {DeleteWorkoutSessionUseCase} from './delete-workout-session-use-case';

@Injectable({providedIn: 'root'})
export class WorkoutSessionModelFacadeService {
  constructor(private displayWorkoutSession: DisplayWorkoutSessionModelsUseCase,
              private newModelUseCase: NewWorkoutSessionModelUseCase,
              private deleteModelUseCase: DeleteWorkoutSessionUseCase
  ) {
  }

  get workoutSessionModels(): Observable<WorkoutSessionModel[]> {
    return this.displayWorkoutSession.execute();
  }

  newWorkoutSessionModel(model: WorkoutSessionModel): void {
    this.newModelUseCase.execute(model);
  }

  deleteWorkoutSessionModel(id: string): void {
    this.deleteModelUseCase.execute(id);
  }

}
