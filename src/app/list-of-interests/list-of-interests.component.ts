import { Component, OnInit } from '@angular/core';
import { interestData } from './interests-data';
import { interests } from './interests.model';

@Component({
  selector: 'app-list-of-interests',
  templateUrl: './list-of-interests.component.html',
  styleUrls: ['./list-of-interests.component.css']
})
export class ListOfInterestsComponent implements OnInit {

  interests: interests[] = interestData
  selectedInterest: interests


  constructor() { }

  ngOnInit(): void {
  }

  getDetails(selected: interests){
    console.log(selected)
    this.selectedInterest = selected

  }


}
