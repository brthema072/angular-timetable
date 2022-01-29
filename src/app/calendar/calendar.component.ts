import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc  } from '@angular/fire/firestore';
import { TimeModel } from '../model/time';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  successShowAlert: boolean = false;
  errorShowAlert: boolean = false;

  startOffice: number = 8
  endOffice: number = 17

  agendaReference = collection(this.firestore, 'agenda'); 

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
  }

  getClickedTime(time: TimeModel){
    this.addTime(time);
  }

  addTime(time: TimeModel){
    addDoc(this.agendaReference, {
      username: "Bruno",
      email: "b@b.com",
      day: time.day,
      hour: time.hour
    }).then((res) => {
      this.successShowAlert = true

      setTimeout(() => {
        this.successShowAlert = false
      }, 5000);
    }).catch((err) => {
      console.log(err)
      this.errorShowAlert = true
      
      setTimeout(() => {
        this.errorShowAlert = false
      }, 5000);
    })
  }

}
