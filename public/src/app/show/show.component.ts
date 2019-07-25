import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  restaurantId: any;
  updatedRestaurant: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.updatedRestaurant = {name: '', quantity: '', price: ''}
      this.restaurantId = params['id'];
      console.log("show",this.restaurantId);
      this.getOneRestaurant();
    })
  }

  getOneRestaurant() {
    console.log("product id=", this.restaurantId)
    const observable = this.httpService.getOneRestaurantFromDb(this.restaurantId)
    observable.subscribe(data => {
      console.log('Got one product', data);
      this.updatedRestaurant = {name: data['name'], quantity: data['quantity'], price: data['price']};
    });
  }

  goHome() {
    this._router.navigate(['/products']);
  }

  deleteRestaurant(id){
    const observable = this.httpService.deleteFromDb(id);
    observable.subscribe(data => {
      console.log('Deleting Restaurant', data);
    });
  }

}
