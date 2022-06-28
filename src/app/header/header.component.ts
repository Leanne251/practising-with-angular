import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


@Output() optionClicked = new EventEmitter<string>()

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

showActivities(value:string){
    console.log(value)
    this.optionClicked.emit(value)
}

goToRoutes(){
  this.router.navigate(['routes']), {RelativeTo: this.route}
}

goToAnimals(){
  this.router.navigate(['animals']), {RelativeTo: this.route}
  console.log("route", this.route)
}

}

// on click emit a variable to true and then show this section if variable = true?
