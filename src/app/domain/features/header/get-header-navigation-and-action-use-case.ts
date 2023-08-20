import {Injectable} from '@angular/core';
import {ViewEnum} from './view.enum';
import {ModelsHeaderConstant} from './models-header.constant';
import {SessionHeaderConstants} from './session-header.constants';
import {ActionHeaderInterface} from './action-header.interface';
import {NavigationHeaderInterface} from './navigation-header.interface';

@Injectable({providedIn: 'root'})
export class GetHeaderNavigationAndActionUseCase {

  execute(views: ViewEnum): Array<ActionHeaderInterface | NavigationHeaderInterface> {
    const switchByView = {
      [ViewEnum.MODELS]: ModelsHeaderConstant,
      [ViewEnum.SESSION]: SessionHeaderConstants
    };
    return switchByView[views] ?? []
  }
}
