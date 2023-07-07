import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
        name: 'convertToBaseHundred'
      })
export class ConvertToHundredBasePipe implements PipeTransform {

  transform(runningTimer: number, selectedTimer): number {
    let progress = 100;
    if (runningTimer && selectedTimer) {
      progress = runningTimer / selectedTimer * 100;
    }
    return progress;
  }

}
