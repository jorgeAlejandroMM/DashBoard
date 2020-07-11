import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuarioModel } from 'src/app/model/Usuario.model';
import { EditarComponent } from 'src/app/pages/usuarios/editarUsuario/editar.component';

import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  ListaUsuarios:Array<any>=[]
  EditarUsuario:EditarComponent;
  constructor(private servicioUser:UsuariosService, private router:Router) { 
   

  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.servicioUser.ObtenerUsuarios().subscribe(data=>{ 
      this.ListaUsuarios=data;
      //  console.table(this.ListaUsuarios)
      })
  }


  eliminarUsuario(user:any){

  }

  editarUsuario(user:UsuarioModel){
 
    localStorage.setItem('usuario', JSON.stringify(user))
   return this.router.navigate([`/navbarUsers/EditarUsuario`,user.id]); 
  }
}
