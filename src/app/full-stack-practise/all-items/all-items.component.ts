import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FullStackServiceService } from '../service/full-stack-service.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css'],
})
export class AllItemsComponent implements OnInit {
  get allFoods() {
    return this.fullStackService.immutableFoods;
  }

  @Output() editMode = new EventEmitter();

  constructor(private fullStackService: FullStackServiceService) {}

  ngOnInit(): void {
    this.getFoodData();
    this.fullStackService.allFoodItems$.subscribe();
  }

  getFoodData() {
    this.fullStackService.getFoodData().subscribe((foodItems) => {
      this.fullStackService.setFoodItems(foodItems);
    });
  }

  delete(id: number) {
    this.fullStackService.deleteItem(id).subscribe(() => {
      this.getFoodData();
    });
  }

  edit() {
    this.editMode.emit('true');
  }
}

//click on edit, form becomes an edit form and sends a put request with the new data.
