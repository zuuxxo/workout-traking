import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericInputFieldComponent} from './generic-input-field/generic-input-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
            declarations: [GenericInputFieldComponent],
            exports:      [
              GenericInputFieldComponent
            ],
            imports:      [
              CommonModule,
              MatFormFieldModule,
              ReactiveFormsModule,
              MatInputModule,
            ]
          })
export class FormsModule {
}
