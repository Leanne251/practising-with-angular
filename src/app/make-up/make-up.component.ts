import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MakeUpService } from './make-up.service';

@Component({
  selector: 'app-make-up',
  templateUrl: './make-up.component.html',
  styleUrls: ['./make-up.component.css']
})
export class MakeUpComponent implements OnInit {

  image: string;
  data: any
  searchResults: any;
  selectMakeUp: FormGroup
  customSearchForm: FormGroup;

  constructor(private makeupService: MakeUpService) { }


  get controls(){
    return (<FormArray>this.customSearchForm.get('array-search')).controls
  }


  ngOnInit(): void {

    this.selectMakeUp = new FormGroup ({
      product_type: new FormControl ("-- select an option --"),
      brand: new FormControl ("-- select an option --")

    })

    this.customSearchForm = new FormGroup ({
     'key_word': new FormControl("description should include")
    })

     this.makeupService.fetchMascaraImages().subscribe(
       (data => {
        this.data = data
        // console.log("data in comp", this.data[0].image_link)
        // this.image = this.data[0].image_link
        // console.log("data", this.data)
       }
        )
     )


}

search(){
  this.makeupService.searchForItems(this.selectMakeUp.value).subscribe(
    (data => {
      console.log("data", data)
      this.searchResults = data
    })
  )

}

searchArray(){

}




getKeyWordsArray(){
  (<FormArray>this.customSearchForm.get('array-search')).push(new FormGroup ({
    'key-word': new FormControl("null")

  }))
}




}
