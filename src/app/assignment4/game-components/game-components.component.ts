import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-components',
  templateUrl: './game-components.component.html',
  styleUrls: ['./game-components.component.css']
})
export class GameComponentsComponent implements OnInit {

interval: any; // so we can save the setInterval function, so we can clear it!
seconds = 0
@Output() outputEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


  onStart(){
  this.interval =  setInterval(()=>{
    this.outputEvent.emit(this.seconds)
     this.seconds++
     console.log(this.seconds)
   }, 1000)

    // an event should get emmitted each second
  }

  onStop(){
    clearInterval(this.interval)
  }


}
