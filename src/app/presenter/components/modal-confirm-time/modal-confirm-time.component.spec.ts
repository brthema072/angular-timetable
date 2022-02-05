import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmTimeComponent } from './modal-confirm-time.component';

describe('ModalConfirmTimeComponent', () => {
  let component: ModalConfirmTimeComponent;
  let fixture: ComponentFixture<ModalConfirmTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
