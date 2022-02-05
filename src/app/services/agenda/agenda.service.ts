import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { TimeModel } from 'src/app/model/time';
import { UserModel } from 'src/app/model/user';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private agendaReference = collection(this.firestore, 'agenda');

  constructor(private firestore: Firestore, private logService: LogService) { }


  registerAgenda(time: TimeModel, user: UserModel): Promise<boolean>{
    return addDoc(this.agendaReference, {
      username: user.name,
      email: user.email,
      phone: user.phone,
      day: time.day,
      hour: time.hour
    }).then((res) => {
      return true;
    }).catch((err) => {
      this.logService.registerErrorLoogger(err)
      return false;
    })
  }
}
