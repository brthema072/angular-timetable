import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-register',
  templateUrl: './alert-register.component.html',
  styleUrls: ['./alert-register.component.css']
})
export class AlertRegisterComponent implements OnInit {

  @Input() successShowAlert: boolean = false;
  @Input() errorShowAlert: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
