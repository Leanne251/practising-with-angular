import { Component, Input, OnInit } from '@angular/core';
import { interests } from '../../interests.model';

@Component({
  selector: 'app-saved-activities',
  templateUrl: './saved-activities.component.html',
  styleUrls: ['./saved-activities.component.css']
})
export class SavedActivitiesComponent implements OnInit {


 @Input() thisSavedActivity: interests;

  constructor() { }

  ngOnInit(): void {
  }

}
