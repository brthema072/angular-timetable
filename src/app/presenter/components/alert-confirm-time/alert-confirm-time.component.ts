import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-confirm-time',
  templateUrl: './alert-confirm-time.component.html',
  styleUrls: ['./alert-confirm-time.component.css']
})
export class AlertConfirmTimeComponent implements OnInit {

  @Input() successShowAlert: boolean = false;
  @Input() errorShowAlert: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
