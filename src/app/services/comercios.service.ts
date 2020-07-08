import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  URL:string;

  constructor(private _http:HttpClient) {
    this.URL = 'https://alw-lab.herokuapp.com/commerces'
    console.log("Servicio  comercio Iniciado");
   }
//Datos  para pintar en la grafica
   getCommercesgraph():Observable<any>{

    return this._http.get(`${this.URL}/graph`);
   }

//Datos de comercio
   getCommerces():Observable<any>{

    return this._http.get(`${this.URL}`);
   }
}
