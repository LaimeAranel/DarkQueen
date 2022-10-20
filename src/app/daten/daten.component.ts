import { Component, OnInit } from '@angular/core';
import {Daten} from 'src/app/daten/Daten'
import { map } from 'rxjs/operators';
import { daten } from './mock-Daten'; 
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-daten',
  templateUrl: './daten.component.html',
  styleUrls: ['./daten.component.css']
})
export class DatenComponent implements OnInit {
  daten = Daten[]
addToRalf(){                        
      let daten = new Daten();
      return this.daten.push({id: this.daten.id,});
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

