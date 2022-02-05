import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.css']
})
export class ModalOptionsComponent implements OnInit {

  @Input() timeTable: any;

  userLocalStorage: string = localStorage.getItem("user") ?? "";

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("user")
    setTimeout(() => {
      location.reload()
    }, 500);
  }

}
