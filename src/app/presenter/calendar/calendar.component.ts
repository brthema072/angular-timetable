import { Component, OnInit } from '@angular/core';
import { TimetableModel } from 'src/app/model/timetable';
import { UserModel } from 'src/app/model/user';
import { TimeModel } from '../../model/time';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  startOffice: number = 8
  endOffice: number = 17

  userLocalStorage: string | null = localStorage.getItem("user");

  timetableModel: TimetableModel | null = null;

  constructor() { }

  ngOnInit(): void {    
  }

  private buildUser(user: string){
    return JSON.parse(user)
  }

  getClickedTime(time: TimeModel){
    if(this.userLocalStorage != null){
      let user: UserModel = this.buildUser(this.userLocalStorage!)
      this.timetableModel = new TimetableModel(time, user)
    }
  }

}
