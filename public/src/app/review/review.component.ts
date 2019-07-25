import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  restaurantId: any;
  review: any;
  updatedRestaurant: any;


  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.review = {customer: '', stars: '', reviewDesc: ''};
      this.restaurantId = params['id'];
      this.updatedRestaurant = {name: "", cuisine: "", reviews: []};
      console.log("updated",this.restaurantId);
      this.getOneRestaurant();
    })
  }

  addReview() {
    const observable = this.httpService.addReview(this.restaurantId, this.review);
    observable.subscribe(data => {
      console.log("Got our update",data);
      this.review = { customer: '', stars: '', reviewDesc: ''};
    })
    this.goHome();
  }

  getOneRestaurant() {
    console.log("product id=", this.restaurantId)
    const observable = this.httpService.getOneRestaurantFromDb(this.restaurantId)
    observable.subscribe(data => {
      console.log('Got one product', data);
      this.updatedRestaurant = {name: data['name'], cuisine: data['cuisine'], reviews: data['reviews']};
    });
  }

  goHome() {
    this._router.navigate(['/restaurants/' + this.restaurantId]);
  }

}
