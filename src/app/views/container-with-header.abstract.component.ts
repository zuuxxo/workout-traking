import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {KeyValue} from '@angular/common';
import {ViewEnum} from '../domain/features/header/view.enum';
import {ActionHeaderInterface} from '../domain/features/header/action-header.interface';
import {NavigationHeaderInterface} from '../domain/features/header/navigation-header.interface';

@Component({
             template: ''
           })
export abstract class ContainerWithHeaderAbstractComponent {
  @Input() view: KeyValue<ViewEnum, string>;
}
