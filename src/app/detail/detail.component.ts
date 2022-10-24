import { Component, OnInit } from '@angular/core';
import { Daten } from '../daten/Daten';
import { Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Data } from '@angular/router';
import {DataService} from 'src/app/daten/Daten.service' 
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

daten: Data = []
  ngOnInit(): void {
  }
  Data = this.fb.group({
    platform: [""],
    username: [''],
    password: [""],
    email: [""],
    })
    items = this.DataService.getItems();

         addAnswer(): void {
      console.log(this.Data.value);
     }
  
  constructor(
    private fb: FormBuilder,
    private DataService: DataService) { }

}
