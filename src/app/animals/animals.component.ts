import { Component, OnInit, ViewChild } from '@angular/core';
import { SharkDirective } from '../shark.directive';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  //This ! means the variable is not null or undefined.
  // can be used in strict mode of typescript to stop the red line.

  // because it is getting the value from the directive, it just has to wait for the 'AfterViewInit lifecycle hook to run
extraCreature!: string;

//can use ViewChild to see the directive.
// This is also imported!!
// by using view child we have access to everything on this component!


@ViewChild(SharkDirective)
set appShark(directive: SharkDirective){
  this.extraCreature = directive.creature
}
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log(this.extraCreature)
  }

  whoAmI(){
    return "I am the animal component"
  }

}
