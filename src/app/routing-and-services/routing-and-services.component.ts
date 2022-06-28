import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-and-services',
  templateUrl: './routing-and-services.component.html',
  styleUrls: ['./routing-and-services.component.css']
})
export class RoutingAndServicesComponent implements OnInit {

  user: {id: number; name: string}

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
  }

}
