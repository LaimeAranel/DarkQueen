import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ApplyFormBase } from './questions';
import { QuestionService } from 'src/app/apply-form/questions.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: ApplyFormBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as ApplyFormBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}