import {Injectable} from '@angular/core';
import {WorkoutSessionModel} from '../../model/workout-session-model';
import {Observable} from 'rxjs';
import {DisplayWorkoutSessionModelsUseCase} from './display-workout-session-models-use-case';
import {NewWorkoutSessionModelUseCase} from './new-workout-session-model-use-case';
import {DeleteWorkoutSessionUseCase} from './delete-workout-session-use-case';
import {UpdateWorkoutSessionModelUseCase} from './update-workout-session-model-use-case';
import {SelectWorkoutSessionModelUseCase} from './select-workout-session-model-use-case';
import {WorkoutSession} from '../../model/workout-session';

@Injectable({providedIn: 'root'})
export class WorkoutSessionModelFacadeService {
  constructor(private displayWorkoutSession: DisplayWorkoutSessionModelsUseCase,
              private newModelUseCase: NewWorkoutSessionModelUseCase,
              private deleteModelUseCase: DeleteWorkoutSessionUseCase,
              private updateModelUseCase: UpdateWorkoutSessionModelUseCase,
              private selectActiveSession: SelectWorkoutSessionModelUseCase
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

  updateWorkoutSessionModel(model: WorkoutSessionModel): void {
    this.updateModelUseCase.execute(model);
  }

  setActiveSession(model: WorkoutSessionModel): void {
    this.selectActiveSession.execute(model);
  }


}
