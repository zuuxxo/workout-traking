import {Serie} from './serie';
import {WorkoutModel} from './workout-model';

export class Workout {
  title: string;
  series: Serie[];
  comments: string;
  objectifs ?: Serie;

  constructor(title: string, series: Serie[], objectifs?: Serie, comments?: string) {
    this.title     = title;
    this.series    = series;
    this.comments  = comments ?? null;
    this.objectifs = objectifs ?? null;
  }

  static buildWorkoutFromWorkoutModel(model: WorkoutModel): Workout {
    const series               = new Array<Serie>();
    const {weight, reps, rest} = model.objectifs;
    for (let i = 0; i < model.seriesNumber; i++) {
      series.push(new Serie(weight, 0, rest));
    }
    return new Workout(model.title, series, {...model.objectifs});
  }
}
