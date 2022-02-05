import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRegisterComponent } from './alert-register.component';

describe('AlertRegisterComponent', () => {
  let component: AlertRegisterComponent;
  let fixture: ComponentFixture<AlertRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
