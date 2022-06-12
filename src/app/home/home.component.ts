import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivityTwo } from '../activity.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  author= "Leanne Smith"
  selectedActivity: ActivityTwo
  anInput="Hello"

  tabChoice=""

  constructor() { }

  ngOnInit(): void {
  }

  chooseMyActivities(event: Event){
    console.log(event)
  }

  chooseOption(value: string){
    console.log(value)
    this.tabChoice=value;

  }

}
