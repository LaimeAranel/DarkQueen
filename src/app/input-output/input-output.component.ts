import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
@Output() Data = ""
@Output() newDataEvent = new EventEmitter<string>();
  addNewData(value: string) {
    this.newDataEvent.emit(value);
  }
  constructor() { }
  ngOnInit(): void {
  }
  
}
