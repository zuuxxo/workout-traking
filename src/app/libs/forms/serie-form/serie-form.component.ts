import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SerieFormInterface} from './serie-form.interface';

@Component({
             selector:        'app-serie-form',
             templateUrl:     './serie-form.component.html',
             styleUrls:       ['./serie-form.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class SerieFormComponent {
  @Input() serieForm: FormGroup<SerieFormInterface>;
  @Input() param: { flexDirection: 'column' | 'row' } = {flexDirection:'column'}

  ngOnInit(){
    console.log(this.param);
  }

}
