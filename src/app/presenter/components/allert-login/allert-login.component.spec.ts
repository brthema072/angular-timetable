import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllertLoginComponent } from './allert-login.component';

describe('AllertLoginComponent', () => {
  let component: AllertLoginComponent;
  let fixture: ComponentFixture<AllertLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllertLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllertLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
