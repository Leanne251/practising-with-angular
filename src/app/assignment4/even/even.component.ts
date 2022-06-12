import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() evenNumbers: number[]
  @Input()evenNumber: number
  constructor() { }

  ngOnInit(): void {
  }

  getEven(event: Event){
    console.log(event)
  }
}
