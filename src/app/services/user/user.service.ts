import { Injectable } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { createUserWithEmailAndPassword, deleteUser, getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';
import { addDoc, getDocs, query, where } from 'firebase/firestore';
import { UserModel } from 'src/app/model/user';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userReference = collection(this.firestore, "users")

  private auth = getAuth();

  constructor(private firestore: Firestore, private logService: LogService) { }

  login(user: UserModel): Promise<void | User> {
    return signInWithEmailAndPassword(this.auth, user.email, user.password).then((res) => {
      user.uid = res.user.uid
      return this.getUserByUid(user)
    }).catch((err) => {
      this.logService.registerErrorLoogger(err)
      return err
    })
  }

  registerUser(user: UserModel): Promise<void | User> {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password).then((res) => {
      user.uid = res.user.uid
      this.addUser(user)
      return res.user
    }).catch((err) => {
      this.logService.registerErrorLoogger(err)
      return err
    })
  }

  private async getUserByUid(user: UserModel){
    let q = query(this.userReference, where("uid", "==", user.uid));
    var response = await getDocs(q);
    
    return response.docs[0].data();
    
  }

  private deleteCurrentUser(){
    let user = this.auth.currentUser;
    if(user != null){
      let displayName = user.displayName
      deleteUser(user).then((res) => {
        this.logService.registerMessageLoogger("user " + displayName + " deleted")
      }).catch((err) => {
        this.logService.registerErrorLoogger(err)
      })
    }
  }

  private addUser(user: UserModel){
    addDoc(this.userReference, {
      uid: user.uid,
      name: user.name,
      email: user.email,
      phone: user.phone
    }).catch((err) => {
      this.logService.registerErrorLoogger(err)
      this.deleteCurrentUser()
    })
  }

}
