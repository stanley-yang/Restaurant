import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newproduct: any;
  message: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  
  ngOnInit() {
    this.newproduct = { name: '', quantity: '', price: ''};
  }

  
  goHome() {
    this._router.navigate(['/products']);
  }

  createProduct(){

    const observable = this.httpService.sendRestaurantToDb(this.newproduct);
    
    observable.subscribe(data =>{
      console.log(data);
      this.newproduct = data;  
      if (this.newproduct.err) {
        console.log("Duplicate");

      }
      else {
        this.newproduct = { name: '', cuisine: '', reviews:[]};
        this.goHome();
      }
    });
    
    
  }



}


