import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertConfirmTimeComponent } from './alert-confirm-time.component';

describe('AlertConfirmTimeComponent', () => {
  let component: AlertConfirmTimeComponent;
  let fixture: ComponentFixture<AlertConfirmTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertConfirmTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertConfirmTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
