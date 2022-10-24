import { Component, OnInit } from '@angular/core';
import { Daten } from '../daten/Daten';
import { Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  ngOnInit(): void {
  }
  Data = this.fb.group({
    platform: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    odgovori: this.fb.array([this.fb.group]),
    })


      addAnswer(): void {

      console.log(this.Data.value);
     }
  
  constructor(private fb: FormBuilder) { }

}
