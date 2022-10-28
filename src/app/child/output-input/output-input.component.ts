import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-input',
  templateUrl: './output-input.component.html',
  styleUrls: ['./output-input.component.css']
})
export class OutputInputComponent {
  @Input() Daten = '';
  @Output() deleteRequest = new EventEmitter<string>();

  constructor() { }

  delete() {
    console.warn('Child says: emitting item deleteRequest with', this.Daten);
    this.deleteRequest.emit(this.Daten);
  }
  ngOnInit(): void {
  }

}
