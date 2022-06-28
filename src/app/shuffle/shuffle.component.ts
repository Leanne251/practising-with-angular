import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shuffle',
  templateUrl: './shuffle.component.html',
  styleUrls: ['./shuffle.component.css']
})
export class ShuffleComponent implements OnInit {

  @ViewChild('favouriteSports') favouriteSports: any
  @Input() sportsArray: string[]
  randomArray: string[] = []
  numberOfSports: number;
 value: number;
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
  onShowText(text: HTMLParagraphElement){
   text.innerText = "Here is some text using local reference on P tag and a HTML property - innerText!"
   console.log(this.favouriteSports)

  }

}
