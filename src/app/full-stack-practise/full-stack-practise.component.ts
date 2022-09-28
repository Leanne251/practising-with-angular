import { Component, OnInit } from '@angular/core';
import { FullStackServiceService } from './service/full-stack-service.service';

@Component({
  selector: 'app-full-stack-practise',
  templateUrl: './full-stack-practise.component.html',
  styleUrls: ['./full-stack-practise.component.css'],
})
export class FullStackPractiseComponent implements OnInit {
  showAll = false;
  edit: boolean;

  constructor(private fullStackService: FullStackServiceService) {}

  ngOnInit(): void {}

  sortByName() {
    this.fullStackService.sortByName().subscribe((data) => {
      this.fullStackService.setFoodItems(data);
    });
  }

  // setEditMode(editMode: boolean) {
  //   this.edit = editMode;
  //   console.log('edit', this.edit);
  // }
}

// we want to use getters & setters for our data.
