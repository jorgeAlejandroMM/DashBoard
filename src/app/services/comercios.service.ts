import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  URL:string;
   Coordenadas:Array<any>=[];
  constructor(private _http:HttpClient) {
    this.URL = 'https://alw-lab.herokuapp.com/commerces'
   }
//Data para las graficas
   getCommercesGraph():Observable<any>{

    return this._http.get(`${this.URL}/graph`);
   }

//Datos de comercio
   getCommerces():Observable<any>{

    return this._http.get(`${this.URL}`);
   }

   //Coordenadas de comercio
   getCommercesLayer():Observable<any>{
    return this._http.get(`${this.URL}/layer`)
    .pipe(map((data:any)=>data['features']))
   }

}
