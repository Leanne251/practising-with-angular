
import { Component, OnInit,  } from '@angular/core';
import { Sports } from '../activity.model';

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.css']
})
export class MyActivitiesComponent implements OnInit {

numberOfSports: number;
timer = 0
interval: any;

sportsObj: Sports  = {
  sportOne: "Sport One",
  sportTwo: "Sport Two",
  sportThree: "Sport Three"
}

  sportsArray = ["yoga", "fishing", "darts", "football", "golf", "netball"]


  randomArray: string[] = []
  setValue: any;
  disableButton = false;

objValues: string[]

  constructor() { }

  ngOnInit(): void {

  }

  generateSports(){
    this.objValues = Object.values(this.sportsObj)
    console.log(this.objValues, "obj")

    this.startTimer()

    this.getThreeRandomSports()

    this.stopTimer()
}

startTimer(){
  if(this.timer === 0){
    this.interval = setInterval(()=>{
      this.timer++
     }, 100)
  }


}

getThreeRandomSports(){
  for (let [key ,value] of Object.entries(this.sportsObj)){
    console.log("k",key, "v", value)
    let number = Math.floor(Math.random()*3)
    value = this.sportsArray[number]
    //  this.sportsObj[key]  = value; THIS DOESN'T WORK BECAUSE KEY IS OF TYPE "STRING" AND IS NOT SPECIFIC ENOUGH. MUST STATE EXACT TYPE THAT IS N OBJECT
    this.sportsObj[<"sportOne"| "sportTwo" | "sportThree">key]  = value;
    console.log("k",key, "v", value)
  }

console.log(this.sportsObj)
}

stopTimer(){

 let objectValues = Object.values(this.sportsObj)
 this.setValue = new Set(objectValues)
 console.log(this.setValue)
 if (this.setValue.size === 1){
   clearInterval(this.interval)
   this.disableButton = true;
   setTimeout(()=>alert(`Your score is ${this.timer}`),500)


 }


  }




getRandomArray(){

  this.randomArray=[]
  // generate a random array of length numberOfSports
  for(let i = 0; i < this.numberOfSports; i++){
    let number = Math.floor(Math.random()*6)
    this.randomArray.push(this.sportsArray[number])
  }
}

reset(){

  this.timer = 0;

  this.sportsObj  = {
  sportOne: "Sport One",
  sportTwo: "Sport Two",
  sportThree: "Sport Three"
}

this.objValues = Object.values(this.sportsObj)
this.disableButton = false

}


}

 //NOT SURE ABOUT THIS METHOD - GET RED LINES!!
    // let k: keyof this.sportsObj
    // for(let k in this.sportsObj){
    //   console.log("k", k, "v", k[this.sportsObj])

//  Object.entries(this.sportsObj).map(([key, value])=>{
//          console.log("k",key, "v", value)
//          let number = Math.floor(Math.random()*3)
//          value = this.sportsArray[number]
//          console.log("k",key, "v", value)

//  })


// Object.keys(this.sportsObj).forEach(key =>{
//   let number = Math.floor(Math.random()*3)
//   this.sportsObj = this.sportsArray[number]
//})


