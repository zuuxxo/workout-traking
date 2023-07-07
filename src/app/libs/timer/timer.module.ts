import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimerContainerComponent} from './views/timer-container.component';
import {TimerListComponent} from './views/timer-list/timer-list.component';
import {StoreModule} from '@ngrx/store';
import * as fromTimers from './data/store/timers.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TimersEffects} from './data/store/timers.effects';
import {DisplayAllAvailableTimerUseCase} from './domain/features/display-all-available-timer-use-case';
import {MatButtonModule} from '@angular/material/button';
import {DisplayByDurationPipe} from './views/shared/pipe/display-by-duration.pipe';
import { RunningTimerComponent } from './views/running-timer/running-timer.component';


@NgModule({
            declarations: [
              TimerContainerComponent,
              TimerListComponent,
              DisplayByDurationPipe,
              RunningTimerComponent
            ],
            exports:      [
              TimerContainerComponent
            ],
            imports: [
              CommonModule,
              StoreModule.forFeature(fromTimers.timersFeatureKey, fromTimers.reducer),
              EffectsModule.forFeature([TimersEffects]),
              MatButtonModule,
            ],
            providers:    [DisplayAllAvailableTimerUseCase]
          })
export class TimerModule {
}
