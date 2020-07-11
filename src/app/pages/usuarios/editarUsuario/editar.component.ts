import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/model/Usuario.model';
import { parseJSON } from 'jquery';
import { FormGroup ,  FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public user:UsuarioModel=new UsuarioModel();
  formGroup:FormGroup;
  constructor(private formBuilder:FormBuilder) {
  
   }

  ngOnInit(): void {

    this.cargarDatosFormulario();
  }

  get ValidarNombre(){
    
    return  this.formGroup.get('nombre').invalid &&  this.formGroup.get('nombre').touched
   }

   get ValidarCorreo(){

    const Controlcorreo=this.formGroup.get('correo');
    return  Controlcorreo.invalid &&  Controlcorreo.touched  
   }

   get ValidarPassword(){

    return  this.formGroup.get('password').invalid &&  this.formGroup.get('password').touched 
   }

  ValidarFormulario(){
    this.formGroup=this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(3)]],
      correo:['',[Validators.required, Validators.minLength(3), Validators.email]],
      password:['',[Validators.required, Validators.minLength(3)]],
    })
  }

  

  cargarDatosFormulario(){

    let tempUsuario=parseJSON(localStorage.getItem('usuario'));
    this.user={...tempUsuario}
  }


}
