import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CONSTANTS } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class NewUsersService {

  constructor(private _http:HttpClient) { }

  getUsersData() {
    return this._http.get(CONSTANTS.API_URL)
      .pipe(
        map((data:any)=>{
          if(data && data['new_users']) {
            return data['new_users']
          }
          else {
            return [];
          }
        })
      )
  }
}
