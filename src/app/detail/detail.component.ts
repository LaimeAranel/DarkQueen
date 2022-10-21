import { Component, OnInit } from '@angular/core';
import { Daten } from '../daten/Daten';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  daten: Daten[] = []
}
