import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Activation } from '../activation.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit, OnChanges{

  users: string []
  constructor(private activation: Activation) { }


  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit(): void {
    this.users = this.activation.inactiveUsers
  }



  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  // onSetToActive(id: number) {
  //   this.userSetToActive.emit(id);
  // }

  onSetToActive(id: number){
    this.activation.setToActive(id)
  }

}
