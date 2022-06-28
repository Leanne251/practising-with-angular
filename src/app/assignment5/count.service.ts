import { Injectable } from '@angular/core';
import { ActiveUsersComponent } from './active-users/active-users.component';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  activeToInactiveCounter = 0
  inactiveToActiveCounter = 0

  incrementActiveToInactive(){
    this.activeToInactiveCounter++
    console.log("increment active to inactive", this.activeToInactiveCounter)
  }

  incrementInactivetoActive(){
    this.inactiveToActiveCounter++
    console.log("increment inactive to active", this.inactiveToActiveCounter)
  }

}




