import {Serie} from './serie';

export class WorkoutModel {
  title: string;
  seriesNumber: number;
  objectifs: Serie;

  static parseObjectifsInputToNumber(objectifs: { weight: string, reps: string, rest: string }): Serie {
    return new Serie(Number(objectifs.weight), Number(objectifs.reps), Number(objectifs.rest))
  }
}
