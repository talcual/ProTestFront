import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Settings } from '../core/global';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  post(route:any,params:any){
    
    let _token = localStorage.getItem('token_access');

    if(_token != '' && _token != null){
      const headers = new HttpHeaders({
        'Authorization': 'Bearer '+_token
      });

      return this._http.post(Settings.server + route,params, {headers});

    }else{

      return this._http.post(Settings.server + route,params);
    }

    
  } 

  get(route:any,params:any){
    return this._http.get(Settings.server + route,{params});
  }
}
