import { Component, OnInit } from '@angular/core';
import {Daten} from 'src/app/daten/Daten'
import {daten} from 'src/app/daten/mock-Daten'
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-daten',
  templateUrl: './daten.component.html',
  styleUrls: ['./daten.component.css']
})
export class DatenComponent implements OnInit {
Daten = daten

    addData() {
      let Data = new Daten()
      this.Daten.push(Data)
    }
    selectedList?: Daten;
    onSelect(daten: Daten): void{
      this.selectedList = daten
    }
    addForm() {
      this.Daten.push();
    }
    password = "hidden"
 public textShow = true;
showText(){
  this.textShow = true;
 }
 hideText(){
  this.textShow = false;
 }
 
 
  constructor() { }

  ngOnInit(): void {
  }


}