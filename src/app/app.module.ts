import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {workoutSessionReducer} from './data/store/reducers/workout-session.reducer';
import {HeaderComponent} from './libs/components/header/header.component';

@NgModule({
            declarations: [
              AppComponent,
            ],
            imports:      [
              BrowserModule,
              AppRoutingModule,
              StoreModule.forRoot({workingSession: workoutSessionReducer}, {}),
              EffectsModule.forRoot([]),
              BrowserAnimationsModule,
              StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
            ],
            providers:    [],
            exports:      [
            ],
            bootstrap:    [AppComponent]
          })
export class AppModule {
}
