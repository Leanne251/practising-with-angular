import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MakeUpService {

  constructor(private http: HttpClient) { }


  fetchMascaraImages(){
    const params = new HttpParams().set('brand', 'maybelline' ).set('product_type','mascara')
  return this.http.get<any>('http://makeup-api.herokuapp.com/api/v1/products.json', {params: params})
  }

  searchForItems(formData: any){
    console.log(formData)

    return this.http.get<any>('http://makeup-api.herokuapp.com/api/v1/products.json', {params: formData})


  }



}
