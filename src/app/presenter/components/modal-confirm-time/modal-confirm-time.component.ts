import { Component, Input, OnInit } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { TimeModel } from 'src/app/model/time';
import { TimetableModel } from 'src/app/model/timetable';
import { UserModel } from 'src/app/model/user';
import { AgendaService } from 'src/app/services/agenda/agenda.service';

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

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.userLocalStorage = localStorage.getItem("user") ?? ""
  }

  applyTime(){
    this.addTime(this.timeTable.time, this.timeTable.user)
  }

  addTime(time: TimeModel, user: UserModel){
    this.agendaService.registerAgenda(time, user).then((res: boolean) => {
      if(res){
        this.successShowAlert = true

        setTimeout(() => {
          this.successShowAlert = false
          location.reload()
        }, 3000);
      }else{
        this.errorShowAlert = true

        setTimeout(() => {
          this.errorShowAlert = false
        }, 5000);
      }
    })
  }

}
