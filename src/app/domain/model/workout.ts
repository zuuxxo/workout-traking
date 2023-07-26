import {Serie} from './serie';
import {WorkoutModel} from './workout-model';

export class Workout {
  title: string;
  series: Serie[];
  comments: string;

  constructor(title: string, series: Serie[], comments?: string) {
    this.title    = title;
    this.series   = series;
    this.comments = comments ? comments : null;
  }

  static generateWorkoutFromWorkoutModel(model: WorkoutModel): Workout {
    const series = new Array<Serie>();
    for (let i = 0; i < model.seriesNumber; i++) {
      series.push(new Serie());
    }
    return new Workout(model.title, series);
  }
}
