import {ActionHeaderInterface} from './action-header.interface';
import {NavigationHeaderInterface} from './navigation-header.interface';

export const enum ActionModelsHeader {
  NEW_MODEL    = 'NEW_MODEL',
  FREE_WORKOUT = 'FREE_WORKOUT'
}

export const ModelsHeaderConstant: Array<ActionHeaderInterface | NavigationHeaderInterface> = [
  {
    key:     'NAVIGATION',
    value:   'Vers l\'entrainement',
    payload: '/session'
  },
  {
    key:     'NAVIGATION',
    value:   'Vers Home',
    payload: '/home'
  },
  {
    key:     'ACTION',
    value:   'Créer un nouveau modèle d\'entrainement',
    payload: ActionModelsHeader.NEW_MODEL
  },
  {
    key:     'ACTION',
    value:   'Entrainement libre',
    payload: ActionModelsHeader.FREE_WORKOUT
  },
];
