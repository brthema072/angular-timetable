import { Component, OnInit } from '@angular/core';
import { TimeModel } from '../model/time';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  startOffice: number = 8
  endOffice: number = 17

  constructor() { }

  ngOnInit(): void {
  }

  getClickedTime(time: TimeModel){
    console.log(time);
  }

}
