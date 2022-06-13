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
isSelected= false;

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(){
    this.selectedInterest.emit()
    this.isSelected = !this.isSelected


  }



}
