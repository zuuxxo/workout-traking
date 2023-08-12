import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
             selector:        'app-header',
             templateUrl:     './header.component.html',
             styleUrls:       ['./header.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class HeaderComponent {
  constructor(private route: ActivatedRoute, private test:Router) {
  }

  ngOnInit() {
    this.test.events.subscribe((res)=> console.log('events', res))

  }
}
