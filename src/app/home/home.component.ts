import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { ActivityTwo } from '../activity.model';
import { AnimalsComponent } from '../animals/animals.component';


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

  @ViewChild(AnimalsComponent) animals: AnimalsComponent

  // ngAfterViewInit(){
  //   console.log("This doesn't work :( ", this.animals.whoAmI())
  // }

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
