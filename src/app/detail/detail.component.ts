import { Component, Input, OnInit } from '@angular/core';
import { Daten } from '../daten/Daten';
import { Validators, FormBuilder, FormControl, FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Symfony } from '../config/symfony.service';
import { LocalService } from '../localestorage/local_storage.service';
import { DatenComponent } from '../daten/daten.component';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailFormComponent implements OnInit { 
  ngOnInit(): void {;
  }
  

@Output()  newDataEvent = new EventEmitter<string>()


  DataForm: FormGroup; 
  Daten: Daten[] = []



  
addAnswer(){
      console.log(this.DataForm.value);
     }
     addNewData(value: string) {
  this.newDataEvent.emit(value)
 
}
   constructor(
    private fb: FormBuilder,
    private Symfony:Symfony) {
      this.DataForm = this.fb.group({ 
        platform: [""],
        username: [''],
        password: [""],
        email: [""],
        Daten: this.fb.array([this.Daten])
        })
       
    }
}
