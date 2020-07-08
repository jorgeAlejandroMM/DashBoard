import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../model/Usuario.model';
import { AutenticacionService } from './autenticacion.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  
  URL:string;
  constructor( private http :HttpClient, private servicioAut:AutenticacionService) { 
    this.URL="https://login-86407.firebaseio.com/";
  }


  
  ObtenerUsuarios():Observable<any>|any{
    let usuario : UsuarioModel[]=[];
  return this.http.get(`${this.URL}/Usuario.json`)
          
          .pipe(map((keyUsuario:object)=>{
  
            Object.keys(keyUsuario).forEach(((valores)=>{
             
              usuario.push(keyUsuario[valores]);
          }));
          return usuario;
          // console.table(usuario);
       }));
 
  }

}
