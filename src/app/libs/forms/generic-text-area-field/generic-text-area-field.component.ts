import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractGenericFieldComponents} from '../abstract-generic-field.components';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
             selector:        'app-generic-text-area-field',
             templateUrl:     './generic-text-area-field.component.html',
             styleUrls:       ['./generic-text-area-field.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush,
             providers:       [{
               provide:     NG_VALUE_ACCESSOR,
               multi:       true,
               useExisting: GenericTextAreaFieldComponent
             }]
           })
export class GenericTextAreaFieldComponent extends AbstractGenericFieldComponents {

}
