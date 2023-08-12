import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {workingSessionReducer} from './data/store/reducers/working-session-model.reducer';
import { HeaderComponent } from './libs/components/header/header.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
            declarations: [
              AppComponent,
              HeaderComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              StoreModule.forRoot({workingSession: workingSessionReducer}, {}),
              EffectsModule.forRoot([]),
              BrowserAnimationsModule,
              StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
              MatButtonModule,
            ],
            providers:    [],
            bootstrap:    [AppComponent]
          })
export class AppModule {
}
