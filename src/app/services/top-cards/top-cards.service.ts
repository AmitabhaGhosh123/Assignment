import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CONSTANTS } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class TopCardsService {

  constructor(private _http:HttpClient) { }

  getCardsData() {
    return this._http.get(CONSTANTS.API_URL)
      .pipe(
        map((data:any)=>{
          if(data && data['top_cards']) {
            return data['top_cards']
          }
          else {
            return [];
          }
        })
      )
  }
}
