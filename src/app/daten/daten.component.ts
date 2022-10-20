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
  daten: Daten[] = []
addToRalf(){                        
      let daten = new Daten();
      this.Daten.push(daten);
      };
    
  
  
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

