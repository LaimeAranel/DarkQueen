import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ApplyFormBase } from './questions';

@Component({
  selector: 'app-question',
  templateUrl: 'src/app/apply-form/apply.component.html'
})
export class ApplyFormComponent {
  @Input() question!: ApplyFormBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}