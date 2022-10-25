import { Component, OnInit } from '@angular/core';
import { Daten } from '../daten/Daten';
import { Validators, FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
import { daten } from 'src/app/daten/mock-Daten';
import {DataService} from 'src/app/daten/Daten.service' 
import { LocalService } from '../localestorage/local_storage.service';
import { DatenComponent } from '../daten/daten.component';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailForm implements OnInit { 
  ngOnInit(): void {
  }

  Daten = daten
  Data: FormGroup;
  constructor(
    private fb: FormBuilder,
    private DataService: DataService) {
      this.Data = this.fb.group({
        
        platform: [""],
        username: [''],
        password: [""],
        email: [""],
        Daten: this.fb.array([this.Daten])
        })
       
    }
  addAnswer() {
      console.log(this.Data.value);
     }
  
}
