import { Component, Input, OnInit } from '@angular/core';
import { Daten } from '../daten/Daten';
import { Validators, FormBuilder, FormControl, FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Symfony } from '../config/symfony.service';
import { LocalService } from '../localestorage/local_storage.service';
import { DatenComponent } from '../daten/daten.component';
import { Output, EventEmitter } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { Observable, VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailFormComponent implements OnInit { 
  ngOnInit(): void {;
  }


  baseURL: string = "https://localhost:8000/api/data";
http: any
  DataForm: FormGroup; 


   constructor(
    private fb: FormBuilder,
    private Symfony:Symfony) {
      var body = this.DataForm = this.fb.group({ 
        platform: [""],
        username: [''],
        password: [""],
        email: [""],
        Daten: this.fb.array([this])},
       
        )
      
    }
}
