import {ControlValueAccessor, FormControl} from '@angular/forms';
import {Component, Input} from '@angular/core';

@Component({
             template: ''
           })
export abstract class AbstractGenericFieldComponents implements ControlValueAccessor {
  @Input() title?: string;

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
