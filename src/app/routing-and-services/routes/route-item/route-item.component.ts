import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { MyRoutes } from 'src/app/myroutes.model';



@Component({
  selector: 'app-route-item',
  templateUrl: './route-item.component.html',
  styleUrls: ['./route-item.component.css']
})
export class RouteItemComponent implements OnInit {

  constructor() { }
  // constructor() { }

  @Input() routes: MyRoutes;
  @Input() index: number;


  ngOnInit(): void {

  }



}
