import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { TimetableModel } from 'src/app/model/timetable';
import { UserModel } from 'src/app/model/user';
import { AgendaService } from 'src/app/services/agenda/agenda.service';
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

  scheduledDaysAndHours: string[] = []

  admin: boolean = false;

  agendas: any[] = []


  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    if(this.userLocalStorage != null){
      let email = JSON.parse(this.userLocalStorage).email;
      if(email == environment.adminEmail){
        this.admin = true
        this.getAgendaTimeInterval()
      }
    }
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

  getDaysOfWeek(event: string[]){
    this.agendaService.getAgendaCurrentTime(event).then((res) => {
      res.forEach((doc) => {
        this.scheduledDaysAndHours.push(doc.data().day + ":" + doc.data().hour)
      })
    })
  }

  getAgendaTimeInterval(){
    const today = new Date()
    const minDate = new Date(today)

    minDate.setDate(minDate.getDate() - 10)

    let strMinDate = ""

    strMinDate = new Date(minDate.toDateString()).getDate().toString().padStart(2, "0") + "/" + (new Date(minDate.toDateString()).getMonth() + 1).toString().padStart(2, "0")
        + "/" + new Date(minDate.toDateString()).getFullYear()
    
    this.agendaService.getAgendaTimeInterval(strMinDate).then((res) => {
      res.forEach((doc) => {
        this.agendas.push(doc.data())
      })
    })
  }

}
