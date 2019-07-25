import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllRestaurantsFromDb() {
    return this._http.get('/api/products');
  }
  sendRestaurantToDb(product) {
    return this._http.post('/api/products', product);
  }
  getOneRestaurantFromDb(id) {
    return this._http.get('/api/products/' + id);
  }
  sendUpdateToDb(id, product) {
    return this._http.put('/api/products/' + id, product);
  }
  deleteFromDb(id){
    return this._http.delete('/api/products/' +id);
  }
  // addReview(id, review){
  //   return this._http.put('/api/restaurants/' + id + '/review', review);
  // }
}
