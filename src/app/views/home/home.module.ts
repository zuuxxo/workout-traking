import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeContainerComponent} from './home-container.component';
import {HomeRoutingModule} from './home-routing.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
            declarations: [
              HomeContainerComponent
            ],
            imports: [
              CommonModule,
              HomeRoutingModule,
              MatCardModule
            ]
          })
export class HomeModule {
}
