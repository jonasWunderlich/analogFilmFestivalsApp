import {
  OnChanges,
  inject,
  Input,
  Output,
  EventEmitter,
  Component,
} from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({ template: '' })
export abstract class GenericContentFormComponent<T extends { id: string }, TC>
  implements OnChanges
{
  editMode = false;
  fb = inject(NonNullableFormBuilder);
  form?: any;
  formOptionsObject?: object;
  hasUnsavedChanges = false;

  @Input() inputValue?: T;
  @Output() submitEvent = new EventEmitter<TC>();
  @Output() deleteEvent = new EventEmitter<T>();

  delete() {
    if (this.editMode) {
      this.deleteEvent.emit(this.inputValue);
    }
  }

  ngOnChanges(): void {
    if (this.form) {
      if (this.inputValue?.id) {
        this.setFormValues(this.inputValue);
        this.editMode = true;
      }
    }
  }

  setFormValues(inputValue: T) {
    if (this.form) {
      this.form.patchValue(inputValue);
    }
  }

  submitForm() {
    if (this.form?.valid) {
      this.submitEvent.emit(this.form.getRawValue());
    }
  }
}
