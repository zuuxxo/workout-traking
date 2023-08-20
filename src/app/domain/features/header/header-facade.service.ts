import {Injectable} from '@angular/core';
import {GetHeaderNavigationAndActionUseCase} from './get-header-navigation-and-action-use-case';
import {ViewEnum} from './view.enum';
import {ActionHeaderInterface} from './action-header.interface';
import {NavigationHeaderInterface} from './navigation-header.interface';

@Injectable({providedIn: 'root'})
export class HeaderFacadeService {
  constructor(private getHeaderUseCase: GetHeaderNavigationAndActionUseCase) {
  }

  getHeaderByView(view: ViewEnum): Array<ActionHeaderInterface | NavigationHeaderInterface> {
    return this.getHeaderUseCase.execute(view);
  }
}
