import { Injectable } from '@angular/core';
import { MyRoutes } from "../myroutes.model"


@Injectable({
  providedIn: 'root'
})
export class MyRouteService{

 myRoutes: MyRoutes[] = [
    {
    name: "Ellie",
    likes: "chocolate",
    route: "M60"
  },
  {
    name: "Michael",
    likes: "chicken",
    route: "A500"
  },
  {
    name: "Matt",
    likes: "pizza",
    route: "M1"
  },
]


getTheRoutes(){
  return this.myRoutes.slice()
}


}
