import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SerieComponent} from './serie/serie.component';
import {HeaderComponent} from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
            declarations: [SerieComponent, HeaderComponent],
            imports: [
              CommonModule,
              MatMenuModule,
              MatButtonModule,
            ],
            exports:      [SerieComponent, HeaderComponent]
          })
export class SharedModule {
}
