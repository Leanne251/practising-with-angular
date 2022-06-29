import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-single-route',
	templateUrl: './single-route.component.html',
	styleUrls: [ './single-route.component.css' ]
})
export class SingleRouteComponent implements OnInit {
	@Input() user: { id: number; name: string; route?: string };
	newUser: { id: number; name: string };
	id: number;
	name: string;

	urlID: number;
	urlName: number;
	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		(this.id = this.route.snapshot.params['id']), (this.name = this.route.snapshot.params['name']);
		console.log(this.id);
		this.route.params.subscribe((params: Params) => {
			this.id = +params['id'];
			this.name = params['name'];
		});
		console.log(this.newUser);
	}
}
