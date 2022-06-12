import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  myTextVariable = ""
  isDisabled = true
  addedUser = false


  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.myTextVariable=""
    this.addedUser = !this.addedUser
  }

  // sometimes still need to return!!
  getColor(){
    return this.addedUser ? 'green' : 'red'

  }
}
