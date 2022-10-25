import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailForm } from './detail.component';

describe('DetailForm', () => {
  let component: DetailForm;
  let fixture: ComponentFixture<DetailForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailForm ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
