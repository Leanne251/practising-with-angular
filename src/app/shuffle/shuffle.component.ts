import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shuffle',
  templateUrl: './shuffle.component.html',
  styleUrls: ['./shuffle.component.css']
})
export class ShuffleComponent implements OnInit {

  @Input() sportsArray: string[]
  randomArray: string[] = []
  numberOfSports: number;

oddNumbers = [ 1,3,5,]
evenNumbers= [2,4,6,]
toggle=true;

  constructor() { }

  ngOnInit(): void {
  }

  getRandomArray(){

    this.randomArray=[]
    // generate a random array of length numberOfSports
    for(let i = 0; i < this.numberOfSports; i++){
      let number = Math.floor(Math.random()*6)
      this.randomArray.push(this.sportsArray[number])
    }
  }


}
