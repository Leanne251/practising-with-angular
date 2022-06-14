import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interests } from '../interests.model';

@Component({
  selector: 'app-looped-interests',
  templateUrl: './looped-interests.component.html',
  styleUrls: ['./looped-interests.component.css']
})
export class LoopedInterestsComponent implements OnInit {

@Input() interestObject: interests
@Output() selectedInterest = new EventEmitter<interests>()
@Input()passedSelectedInterest: interests;

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(){
    this.selectedInterest.emit()
    console.log("selectedInterest", this.selectedInterest)



  }



}
