import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FullStackServiceService } from '../service/full-stack-service.service';

@Component({
  selector: 'app-add-an-item',
  templateUrl: './add-an-item.component.html',
  styleUrls: ['./add-an-item.component.css'],
})
export class AddAnItemComponent implements OnInit {
  foodForm: FormGroup;
  @Input() edit: boolean;
  @Input() editId: number;
  // @Output() editIsFalse = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private fullStackService: FullStackServiceService
  ) {}

  ngOnInit(): void {
    this.foodForm = this.fb.group({
      food: ['', Validators.required],
      price: [null, Validators.required],
      image: '',
      description: '',
    });
  }

  editData() {
    this.edit = false;
    this.fullStackService
      .updateFoodItem(this.foodForm.value, this.editId)
      .subscribe(() => {
        this.fullStackService
          .getFoodData()
          .subscribe((data) => this.fullStackService.setFoodItems(data));
      });
  }

  submitData() {
    console.log(this.foodForm.value);
    this.fullStackService.addFoodItem(this.foodForm.value).subscribe(() => {
      this.fullStackService
        .getFoodData()
        .subscribe((data) => this.fullStackService.setFoodItems(data));
    });
  }
}

// add data to the array, all items needs to be updated.
// all items need to be fetched from the database and then component needs to know.

// when you click edit the id of the item needs to be sent through to the component.
