import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { UserDaten } from '../../daten/Daten';
import { Symfony } from '../../config/symfony.service';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
@Output() 
@Output() newDataEvent = new EventEmitter<string>();
  constructor(private Symfony:Symfony) {UserDaten}
  ngOnInit(): void {
  }
  http: any
  baseURL: string = "https://localhost:8000/api/data";

  AddNewData(){
  this.newDataEvent.emit()
}

}
