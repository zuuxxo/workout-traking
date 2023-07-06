import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
        name: 'displayByDuration'
      })
export class DisplayByDurationPipe implements PipeTransform {

  transform(duration: number): string {
    let text = `${duration} sec`;
    if (duration >= 60) {
      const minute  = Math.trunc(duration / 60);
      const seconde = duration % 60;
      text          = seconde > 0 ? `${minute}min ${seconde}sec ` : `${minute}min`;
    }
    return text;
  }

}
