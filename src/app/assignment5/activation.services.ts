import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable({providedIn: 'root'})

export class Activation{

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


  constructor(private count: CountService){}


  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.count.incrementActiveToInactive()

  }

setToInactive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.count.incrementInactivetoActive()

}



}
