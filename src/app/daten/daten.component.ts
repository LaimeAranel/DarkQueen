import { Component, OnInit } from '@angular/core';
import { UserDaten } from 'src/app/daten/Daten'
import { Symfony } from 'src/app/config/symfony.service';
import { mockdaten } from './mock-Daten';


@Component({
  selector: 'app-daten',
  templateUrl: './daten.component.html',
  styleUrls: ['./daten.component.css']
})
export class DatenComponent implements OnInit { 



 http: any;
fișiere: UserDaten[] = []
Data = mockdaten


  addData(){
  console.log(this.addData())
  }
  deleteData(){
  this.fișiere.pop()
  }
  selected?: UserDaten;
onSelect(daten: UserDaten): void {
  this.selected = daten;
}

  constructor(private Symfony:Symfony,) {}

  ngOnInit(): void {this.getUserDaten()}

daten:  UserDaten[] = []
  public getUserDaten() { //Ralf bleibt Ralf
    this.Symfony.getData()
      .subscribe( 
        (response: { [x: string]: any[]; }) => {
          let commentsJson = [];                           
          commentsJson = response["hydra:member"];
          commentsJson.forEach((commentJson: any) => {
          console.log(commentJson);
          let DatenEntity= new UserDaten();
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
  AddNewData(){
    var body = this.daten
    this.http.put(this.http ,body).subscribe() }
  
     
    ;
  
}
