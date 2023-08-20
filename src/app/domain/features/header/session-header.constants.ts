import {ActionHeaderInterface} from './action-header.interface';
import {NavigationHeaderInterface} from './navigation-header.interface';

export const SessionHeaderConstants: Array<ActionHeaderInterface | NavigationHeaderInterface> = [
  {
    key:     'NAVIGATION',
    value:   'Vers les modèles d\'entrainement',
    payload: '/models'
  },
  {
    key:     'NAVIGATION',
    value:   'Vers Home',
    payload: '/home'
  },
];
