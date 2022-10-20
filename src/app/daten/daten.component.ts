import { Component, OnInit } from '@angular/core';
import {Daten} from 'src/app/daten/Daten'
import {InMemoryDataService} from 'src/app/daten/Daten.service'
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-daten',
  templateUrl: './daten.component.html',
  styleUrls: ['./daten.component.css']
})
export class DatenComponent implements OnInit {
  Daten: Daten[];
 


 
  constructor( private InMemoryDataService:InMemoryDataService) {  
    this.Daten = [];
  }

  ngOnInit(): void {
  } 

addData(){  
                      
      
      console.log(this.Daten);
     return this.Daten.push(); };
    
  
  
 public textShow = true;
showText(){
  this.textShow = true;
 }
 hideText(){
  this.textShow = false;
 }
 

}


