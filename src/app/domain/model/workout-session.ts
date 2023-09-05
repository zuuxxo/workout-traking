import {Workout} from './workout';
import {WorkoutSessionModel} from './workout-session-model';
import {WorkoutModel} from './workout-model';

export class WorkoutSession {
  title: string;
  date: Date;
  workouts: Workout[];
  #model: WorkoutSessionModel;

  constructor(model: WorkoutSessionModel) {
    this.date     = new Date();
    this.#model   = model;
    this.workouts = this.builWorkoutSessionFromWorkoutSessionModel();
    this.title    = `workout session ${model.title}`;
  }

  private builWorkoutSessionFromWorkoutSessionModel(): Workout[] {
    const workouts = new Array<Workout>();
    this.#model.workouts.forEach((workoutModel: WorkoutModel) => {
      const workout = Workout.buildWorkoutFromWorkoutModel(workoutModel);
      workouts.push(workout);
    });
    return workouts;
  }


}





