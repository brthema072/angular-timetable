import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.css']
})
export class ModalOptionsComponent implements OnInit {

  @Input() timeTable: any;

  constructor() { }

  ngOnInit(): void {
  }

}
