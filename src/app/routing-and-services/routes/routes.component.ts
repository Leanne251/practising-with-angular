import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  users = [
    {
    id: 1,
    name: "Sarah",
    route: "M60"
  },
  {
    id: 2,
    name: "Max",
    route: "A500"
  },
  {
    id: 1,
    name: "Charlie",
    route: "M1"
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
