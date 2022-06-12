import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {


  displayed = true
  myArray: number[] = []
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.displayed = !this.displayed
    // let index = this.myArray.length-1
    // console.log(index)
    // this.myArray.push(index+1)
    this.myArray.push(this.myArray.length + 1)


  }
}
