import {WorkoutModel} from './workout-model';

export class WorkoutSessionModel {
  title ?: string;
  workouts: WorkoutModel[];
  creationDate: Date;
  comments: string;
  id?: string;
}
