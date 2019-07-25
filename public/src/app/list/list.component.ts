import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import {HttpService} from '../http.service';
import { EditComponent } from '../edit/edit.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent implements OnInit {
  products: any;
  showEdit: boolean = false;
  productId: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.products = [];
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    const observable = this.httpService.getAllRestaurantsFromDb();
    console.log('Getting Restaurants');
    observable.subscribe(data => {
      console.log('All Restaurants Object',data);
      this.products = data;
    });
  }

  deleteRestaurant(id){
    const observable = this.httpService.deleteFromDb(id);
    observable.subscribe(data => {
      console.log('Deleting Restaurant', data);
    });
    this.getAllRestaurants();
  }

  addItem(newItem: any){
    this.showEdit = false;
    this.getAllRestaurants();
  }

}
