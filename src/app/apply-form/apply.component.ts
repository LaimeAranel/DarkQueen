import { ApplyFormBase } from './questions';

export class TextboxQuestion extends ApplyFormBase<string> {
  override controlType = 'textbox';
}