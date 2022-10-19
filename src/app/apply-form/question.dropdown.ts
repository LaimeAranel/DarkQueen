import { ApplyFormBase } from './questions';

export class DropdownQuestion extends ApplyFormBase<string> {
  override controlType = 'dropdown';
}