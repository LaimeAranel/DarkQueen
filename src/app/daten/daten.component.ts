import { Component, OnInit, Input } from '@angular/core';
import { Daten } from 'src/app/daten/Daten'
import { Symfony } from 'src/app/config/symfony.service';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalService } from '../localestorage/local_storage.service';
import { DetailFormComponent } from '../detail/detail.component';
import { Data } from '@angular/router';
import { platformBrowser } from '@angular/platform-browser';


@Component({
  selector: 'app-daten',
  templateUrl: './daten.component.html',
  styleUrls: ['./daten.component.css']
})
export class DatenComponent implements OnInit { 



 http: any;
daten: Daten[] = []
Data = daten

password= ['Television'];
username = ['Beanbag'];
Daten = ["Beispiel","Beispiel","Beispiel","Beispiel"]
email = ['Drone',];


  getDaten() {
    this.DataService.getDaten();
  }
  addData(Daten: string){
  this.Daten.push(Daten)
  }
  deleteData(){
  this.Daten.pop()
  }
  selected?: Daten;
onSelect(daten: Daten): void {
  this.selected = daten;
}

  constructor(private DataService: DataService) { }


  constructor(private Symfony:Symfony) {} 
  ngOnInit(): void {this.getRalf()}

daten:  Daten[] = []
  public getRalf() {
    this.Symfony.getData()
      .subscribe( 
        (response: { [x: string]: any[]; }) => {
          let commentsJson = [];                           //next() callback
          commentsJson = response["hydra:member"];
          commentsJson.forEach((commentJson: any) => {
          console.log(commentJson);
          let DatenEntity= new Daten();
          DatenEntity.platform = commentJson.platform;
          DatenEntity.username = commentJson.username;
          DatenEntity.email = commentJson.email;
          DatenEntity.password = commentJson.password;
          this.daten.push(DatenEntity);
          });
        },
        (error: any) => {                              //error() callback
          console.error('Request failed with error')
        },
        () => {
          console.error('Request completed')        //complete() callback
        })
        
  }

      }
