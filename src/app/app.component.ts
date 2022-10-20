import { Component } from '@angular/core';
import { LocalService } from './localestorage/local_storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DarkQueen';
  constructor(private localStore: LocalService) {

  }

  ngOnInit(): void {
    this.localStore.saveData('id', 'jk123');
  }
}
