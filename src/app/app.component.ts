import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AnimalsComponent } from './animals/animals.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'workout-app';
  simpleInput: string;


  @ViewChild(AnimalsComponent) animals: AnimalsComponent

  ngAfterViewInit() {
    console.log(this.animals.whoAmI()); // I am a pup component!
  }

}

