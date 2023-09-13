import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {AbstractGenericFieldComponents} from '../abstract-generic-field.components';

export type GenericInputType = 'text' | 'number'

@Component({
             selector:        ' app-generic-input-field',
             templateUrl:     './generic-input-field.component.html',
             styleUrls:       ['./generic-input-field.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush,
             providers:       [{
               provide:     NG_VALUE_ACCESSOR,
               multi:       true,
               useExisting: GenericInputFieldComponent
             }]
           })
export class GenericInputFieldComponent extends AbstractGenericFieldComponents {
  @Input() type: GenericInputType;
}
