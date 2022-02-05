import { TimeModel } from "./time";
import { UserModel } from "./user";

export class TimetableModel {

    constructor(time: TimeModel, user: UserModel){
        this.time = time;
        this.user = user;
    }

    time: TimeModel;
    user: UserModel;
}