import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {

   number: number;
   evenArray: number[] =[]
   oddArray: number[] = []

  constructor() { }

  ngOnInit(): void {

  }
  onIntervalFired(event: number){ // The type is what the event emiiter is!!
        console.log("from game-component to parent", event)
        this.number = event
        console.log("number in parent", this.number)
        if(this.number % 2 === 0){
          this.evenArray.push(this.number)
        } else {
          this.oddArray.push(this.number)
        }
        console.log(this.evenArray)
  }

}
