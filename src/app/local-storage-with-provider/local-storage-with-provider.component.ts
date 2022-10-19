import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-local-storage-with-provider',
  templateUrl: './local-storage-with-provider.component.html',
  styleUrls: ['./local-storage-with-provider.component.css']
})
export class LocalStorageWithProviderComponent implements OnInit {
  formGroup: FormGroup;
  storedData: string;

  constructor(private formBuilder: FormBuilder, private localStorageService: LocalStorageService) {
    this.formGroup = this.formBuilder.group({
      storageKey: '',
      storageData: '',
    });
  }

  ngOnInit() {
  }

  onSetData() {
    this.localStorageService.setItem(
      this.formGroup.get('storageKey').value,
      this.formGroup.get('storageData').value
    );
  }

  onGetData() {
    this.storedData = this.localStorageService.getItem(this.formGroup.get('storageKey').value);
  }

  onRemoveData() {
    this.localStorageService.removeItem(this.formGroup.get('storageKey').value);
  }

  onClearData() {
    this.localStorageService.clear();
  }

}