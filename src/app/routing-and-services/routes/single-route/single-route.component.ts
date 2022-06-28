import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-route',
  templateUrl: './single-route.component.html',
  styleUrls: ['./single-route.component.css']
})
export class SingleRouteComponent implements OnInit {

@Input() user: {id: number, name: string, route?: string}
newUser: {id: number, name: string}

  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.newUser = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']

    }
    console.log(this.newUser)
  }

}
