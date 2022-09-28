import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FullStackServiceService } from '../service/full-stack-service.service';

@Component({
  selector: 'app-add-an-item',
  templateUrl: './add-an-item.component.html',
  styleUrls: ['./add-an-item.component.css'],
})
export class AddAnItemComponent implements OnInit {
  foodForm: FormGroup;
  edit: boolean;

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

  editData() {}

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
