import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuarioModel } from 'src/app/model/Usuario.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  ListaUsuarios:UsuarioModel[]=[]

  constructor(private servicioUser:UsuariosService, private router:Router) { 
   

  }

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios(){
    this.servicioUser.ObtenerUsuarios().subscribe(data=>{ 
      this.ListaUsuarios=data;

       console.table(this.ListaUsuarios)
      })
  }


  eliminarUsuario(user:any){

  }

  editarUsuario(user:UsuarioModel){
    console.log(user.id);
    
    return this.router.navigate(['/EditarUsuario']); 
    // return this.router.navigateByUrl('/EditarUsuario');
    // user.id?this.router.navigateByUrl(`/Editar`)
  }
}
