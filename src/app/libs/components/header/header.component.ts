import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionHeaderInterface} from '../../../domain/features/header/action-header.interface';
import {NavigationHeaderInterface} from '../../../domain/features/header/navigation-header.interface';

@Component({
             selector:        'app-header',
             templateUrl:     './header.component.html',
             styleUrls:       ['./header.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class HeaderComponent {

  @Input() title: string;
  @Input() navigationItems: Array<ActionHeaderInterface | NavigationHeaderInterface>;

  @Output() selectedNavigationItem: EventEmitter<ActionHeaderInterface | NavigationHeaderInterface>;

  constructor() {
    this.selectedNavigationItem = new EventEmitter<ActionHeaderInterface | NavigationHeaderInterface>();
  }

  ngOnInit() {
  }

  selectNavigationItel(item: ActionHeaderInterface | NavigationHeaderInterface) {
    this.selectedNavigationItem.emit(item);
  }
}
