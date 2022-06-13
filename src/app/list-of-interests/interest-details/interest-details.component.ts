import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { interests } from '../interests.model';

@Component({
  selector: 'app-interest-details',
  templateUrl: './interest-details.component.html',
  styleUrls: ['./interest-details.component.css']
})
export class InterestDetailsComponent implements OnInit {

  @Input() selectedInterest: interests
  @Output() savedActivitiy = new EventEmitter<interests>()
 thisSavedActivity: interests[]=[]

  constructor() { }

  ngOnInit(): void {

  }

  SaveActivity(saved: interests){
    console.log("saved", saved)
   let found = this.thisSavedActivity.find(element => {
     if(element.interest === saved.interest){
       alert("You have already add this item")
       return true;
     } else {
       return false;
     }
   })

   if (!found){
    this.thisSavedActivity.push(saved);
   }



// check if the item already exists before pushing...

  }

  DeleteActivity(deleted: interests){
    console.log("deleted", deleted)
    if(this.thisSavedActivity.length < 1){
      alert("No Items Saved!")
    } else {
      let found = this.thisSavedActivity.findIndex(function(element ){

        if(element.interest === deleted.interest){
          console.log("el", element.interest)
          console.log("del", deleted.interest)
          return true;
        } else {
          return false;
        }
      })
      console.log(this.thisSavedActivity)
      console.log("found", found)

     if (found === -1){
       alert("Item Not Found")
     } else{
      this.thisSavedActivity.splice(found, 1)
     }


    }

  }

 // search the array for the word, then filter it out.
 // search the array of objects in 'thhisSavedActivity' for a match to deleted.interests.
 // filter this object out and show the remaining object.


 //find index of the item and then remove it



}
