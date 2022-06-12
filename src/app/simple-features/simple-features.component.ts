import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-features',
  templateUrl: './simple-features.component.html',
  styleUrls: ['./simple-features.component.css']
})
export class SimpleFeaturesComponent implements OnInit {

  @Input() author: string
  title = "Simple Features"
  myActivities: string[] = ["yoga", "swim", "kayak"]
  newActivity: string;
  activityAdded = false;
choose: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }
  addSimple(input: any){
    console.log(input)
    this.myActivities.push(input)
    this.activityAdded = !this.activityAdded
  }

  addSimpleWithEvent(event: Event){
    console.log(event)
    this.newActivity = (<HTMLInputElement>event.target).value

  }

  addSimpleWithInput(){
    this.myActivities.push(this.newActivity)
  }

  onDeleteItem(activity: string, index: number){
    console.log(index)
    return this.myActivities.splice(index,1)

  }


  chooseYes(){
    this.choose = true
  }

  chooseNo(){
    this.choose = false
  }

}
