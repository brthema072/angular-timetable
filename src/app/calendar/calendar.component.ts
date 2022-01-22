import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  beginningHour: number = 8
  endingHour: number = 17

  constructor() { }

  ngOnInit(): void {
  }

}
