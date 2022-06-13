
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivityTwo} from "../activity.model"
import { ACTIVITIES } from "../mock-activities"

@Component({
  selector: 'app-practise-feature',
  templateUrl: './practise-feature.component.html',
  styleUrls: ['./practise-feature.component.css']
})
export class PractiseFeatureComponent implements OnInit {
  simpleActivityList: string[] = ["yoga", "swim", "kayak"]
  simpleActivity: string;
activity: string;
  selectedActivity: ActivityTwo

  activityTwo: ActivityTwo ={
    activity: "running",
    intensity: 3,
    group: false
  }

  arrayOfActivities = ACTIVITIES;

  @Output() simpleActivityInput = new EventEmitter();

  constructor() { }



  ngOnInit(): void {
    console.log(this.arrayOfActivities)
  }

  addSimpleActivity(newValue: string){
  this.simpleActivityList.push(newValue)

  }


  onSelectActivity(activity: ActivityTwo ){
       this.selectedActivity = activity
       console.log(this.selectedActivity)

  }

}









