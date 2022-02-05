import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-allert-login',
  templateUrl: './allert-login.component.html',
  styleUrls: ['./allert-login.component.css']
})
export class AllertLoginComponent implements OnInit {

  @Input() successShowAlert: boolean = false;
  @Input() errorShowAlert: boolean = false;
  
  @Input() userName!: string;

  constructor() { }

  ngOnInit(): void {
  }

  reloadPage(){
    location.reload()
  }
}
