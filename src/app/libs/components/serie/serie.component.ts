import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Serie} from '../../../domain/model/serie';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
             selector:        'app-serie',
             templateUrl:     './serie.component.html',
             styleUrls:       ['./serie.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class SerieComponent {
  @Input() serie: Serie;
  @Input() displayColumnDirection ?: boolean;

}
