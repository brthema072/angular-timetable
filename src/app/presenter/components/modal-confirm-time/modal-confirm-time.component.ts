import { Component, Input, OnInit } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { TimeModel } from 'src/app/model/time';
import { TimetableModel } from 'src/app/model/timetable';
import { UserModel } from 'src/app/model/user';

@Component({
  selector: 'app-modal-confirm-time',
  templateUrl: './modal-confirm-time.component.html',
  styleUrls: ['./modal-confirm-time.component.css']
})
export class ModalConfirmTimeComponent implements OnInit {

  @Input() timeTable!: TimetableModel;

  successShowAlert: boolean = false;
  errorShowAlert: boolean = false;

  userLocalStorage: string = "";
  
  agendaReference = collection(this.firestore, 'agenda');

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    this.userLocalStorage = localStorage.getItem("user") ?? ""
  }

  applyTime(){
    this.addTime(this.timeTable.time, this.timeTable.user)
  }

  addTime(time: TimeModel, user: UserModel){
    addDoc(this.agendaReference, {
      username: user.name,
      email: user.email,
      phone: user.phone,
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
