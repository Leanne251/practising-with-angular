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
  editId: number;

  constructor(private fullStackService: FullStackServiceService) {}

  ngOnInit(): void {}

  sortByName() {
    this.fullStackService.sortByName().subscribe((data) => {
      this.fullStackService.setFoodItems(data);
      this.edit = false;
    });
  }

  orderByPrice() {
    this.fullStackService.sortByPrice().subscribe((data) => {
      this.fullStackService.setFoodItems(data);
      this.edit = false;
    });
  }

  setEditMode(editObject: any) {
    this.edit = editObject.editMode;
    this.editId = editObject.id;
  }

  findItemsLess(price: any) {
    this.fullStackService.findByPrice(price).subscribe((data) => {
      this.fullStackService.setFoodItems(data);
    });
  }

  // editIsFalse(value: boolean) {
  //   console.log(value);
  //   this.edit = value;
  // }
}

// call the find less than function in the service with the price in the input field.
// use hash binding.
