import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

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
export class GenericInputFieldComponent implements ControlValueAccessor {
  @Input() title?: string;
  @Input() type: any;

  onChange  = (value) => {
  };
  onTouched = () => {
  };
  touched   = false;
  disabled  = false;

  form: FormControl;

  constructor() {
    this.form = new FormControl<string>(null);
  }

  writeValue(value): void {
    this.form.setValue(value, {emitEvent: false});
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  getUserInput(): void {
    this.markAsTouched();
    if (!this.disabled) {
      this.onChange(this.form.value);
    }
  }
}
