import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyRoutes } from 'src/app/myroutes.model';
import { MyRouteService } from 'src/app/services/myroutes.service';

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

myRoutes: MyRoutes[];

  constructor( private myRouteService: MyRouteService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.myRoutes = this.myRouteService.getTheRoutes()
    console.log(this.myRoutes)
  }


  gotoUserOne(){
    this.router.navigate(["routes", 1,"max"]), {relativeTo: this.route}
  }

  getDynamicUser(){

  }
}

