import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private loggerReference = collection(this.firestore, "logs")

  constructor(private firestore: Firestore) { }

  registerMessageLoogger(message: string){
    addDoc(this.loggerReference, {
      message: message,
      date: new Date()
    })
  }

  registerErrorLoogger(error: any){
    addDoc(this.loggerReference, {
      error: error.toString(),
      date: new Date()
    })
  }
}
