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
Daten = daten;

    getData() {
      let CustomObj = new Daten();
      CustomObj.id= "";
      CustomObj.username= "";
      CustomObj.password = "";
      CustomObj.email= "";
      this.Daten.push(CustomObj)

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