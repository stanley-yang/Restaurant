import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import {HttpService} from '../http.service';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  updatedRestaurant: any;
  @Input() restId: any;
  restaurantId: any;
  @Output() newItemEvent = new EventEmitter<string>();
  

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log(this.restId)
    this._route.params.subscribe((params: Params) => {
      this.updatedRestaurant = {name: '', quantity: '', price: ''};
      this.restaurantId = this.restId;
      console.log("updated",this.restaurantId);
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

  updateRestaurant() {
    const observable = this.httpService.sendUpdateToDb(this.restaurantId,this.updatedRestaurant);
    observable.subscribe(data => {
      console.log("Got our update",data);
      this.updatedRestaurant = { name: '', quantity: '', price: ''};
    })
    this.goHome();
  }

  goHome() {
    this._router.navigate(['/products']);
  }

  hideEdit(value: string) {
    this.newItemEvent.emit(value);
  }

}
