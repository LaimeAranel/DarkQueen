import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Daten } from '../daten/Daten'; 
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
  export class ProfileEditorComponent {
    Daten = this.fb.group({
      Profile: this.fb.group({
        platform: ['',Validators.required],
        username: [''],
        password: ['',Validators.required],
        email: ['',Validators.required]
      }),
    });

    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.Daten.value);
    }
    constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
