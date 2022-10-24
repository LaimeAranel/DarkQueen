import { Component, OnInit } from '@angular/core';
import { Daten } from '../daten/Daten';
import { Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Data } from '@angular/router';

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
          addAnswer(): void {
      console.log(this.Data.value);
     }
  
  constructor(private fb: FormBuilder) { }

}
