import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


@Output() optionClicked = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

showActivities(value:string){
    console.log(value)
    this.optionClicked.emit(value)
}


}

// on click emit a variable to true and then show this section if variable = true?
