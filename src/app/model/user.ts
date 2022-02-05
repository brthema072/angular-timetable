export class UserModel {

    constructor(email: string, password: string){
        this.email = email;
        this.password = password;
    }

    uid: string = "";
    name: string = "";
    email: string = "";
    password: string = "";
    phone: string = "";
}