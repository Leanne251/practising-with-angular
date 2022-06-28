import { Component, OnInit} from '@angular/core';
import { Activation } from '../activation.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {


  users: string[];
  constructor(private activation: Activation) { }

  ngOnInit(): void {
   this.users = this.activation.activeUsers
  }


  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  // onSetToInactive(id: number) {
  //   this.userSetToInactive.emit(id);
  // }

  onSetToInactive(id: number){
    this.activation.setToInactive(id)
  }



}
