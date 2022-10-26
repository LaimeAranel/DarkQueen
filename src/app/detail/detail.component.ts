import { Component, Input, OnInit } from '@angular/core';
import { Daten } from '../daten/Daten';
import { Validators, FormBuilder, FormControl, FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {DataService} from 'src/app/daten/Daten.service' 
import { LocalService } from '../localestorage/local_storage.service';
import { DatenComponent } from '../daten/daten.component';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailFormComponent implements OnInit { 
  ngOnInit(): void {
    this.getDaten();
  }
  

@Output()  newDataEvent = new EventEmitter<string>()


  DataForm: FormGroup; 
  Daten: Daten[] = []



    getDaten(): void {
      this.Daten = this.DataService.getDaten();
      console.log(this.Daten)
    }
    delete(){
      this.DataService.Daten.pop();
    }
addAnswer(){
      console.log(this.DataForm.value);
     }
     addNewData(value: string) {
  this.newDataEvent.emit(value)
 
}
   constructor(
    private fb: FormBuilder,
    private DataService: DataService) {
      this.DataForm = this.fb.group({ 
        platform: [""],
        username: [''],
        password: [""],
        email: [""],
        Daten: this.fb.array([this.Daten])
        })
       
    }
}
