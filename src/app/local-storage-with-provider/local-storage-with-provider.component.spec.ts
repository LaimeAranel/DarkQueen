import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { LocalStorageService } from '../local-storage.service';
import { LocalStorageWithProviderComponent } from './local-storage-with-provider.component';

describe('LocalStorageWithProviderComponent', () => {
  let component: LocalStorageWithProviderComponent;
  let fixture: ComponentFixture<LocalStorageWithProviderComponent>;
  let localStorageServiceSpy: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalStorageWithProviderComponent],
      imports: [ReactiveFormsModule],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalStorageWithProviderComponent);
    component = fixture.componentInstance;

    localStorageServiceSpy =
      fixture.debugElement.injector.get(LocalStorageService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should call setItem with key and value', () => {
    component.formGroup = new FormGroup({
      storageKey: new FormControl('aKey'),
      storageData: new FormControl('aValue'),
    });

    spyOn(localStorageServiceSpy, 'setItem').and.callThrough();

    component.onSetData();

    expect(localStorageServiceSpy.setItem).toHaveBeenCalledWith(
      'aKey',
      'aValue'
    );
  });

  it('should return stored data by key', () => {
    let store = { aKey: 'aValue' };
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
    };

    component.formGroup = new FormGroup({
      storageKey: new FormControl('aKey'),
    });

    spyOn(localStorageServiceSpy, 'getItem').and.callFake(
      mockLocalStorage.getItem
    );

    component.onGetData();

    expect(component.storedData).toEqual('aValue');
  });

  it('should remove data by key', () => {
    let store = { aKey: 'aValue' };
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      removeItem: (key: string): void => {
        delete store[key];
      },
    };

    component.formGroup = new FormGroup({
      storageKey: new FormControl('aKey'),
    });

    spyOn(localStorageServiceSpy, 'getItem').and.callFake(
      mockLocalStorage.getItem
    );
    spyOn(localStorageServiceSpy, 'removeItem').and.callFake(
      mockLocalStorage.removeItem
    );

    component.onRemoveData();

    expect(localStorageServiceSpy.getItem('aKey')).toBeNull();
  });

  it('should clear all entries', () => {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      removeItem: (key: string): void => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };

    component.formGroup = new FormGroup({
      storageKey: new FormControl('aKey'),
    });

    store = { aKey: 'aValue', anotherKey: 'anotherValue' };

    spyOn(localStorageServiceSpy, 'getItem').and.callFake(
      mockLocalStorage.getItem
    );
    spyOn(localStorageServiceSpy, 'removeItem').and.callFake(
      mockLocalStorage.removeItem
    );
    spyOn(localStorageServiceSpy, 'clear').and.callFake(mockLocalStorage.clear);

    component.onClearData();

    expect(localStorageServiceSpy.getItem('aKey')).toBeNull();
    expect(localStorageServiceSpy.getItem('anotherKey')).toBeNull();
  });
});
