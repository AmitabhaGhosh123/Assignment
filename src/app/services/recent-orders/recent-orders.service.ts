import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CONSTANTS } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class RecentOrdersService {

  constructor(private _http:HttpClient) { }

  getRecentOrders() {
    return this._http.get(CONSTANTS.API_URL)
    .pipe(
      map((data:any)=>{
        if(data && data['recent_orders']) {
          return data['recent_orders']
        }
        else {
          return [];
        }
      })
    )
  }
}
