export class UsuarioModel{

    id:number;
    nombre:string;
    correo:string;
    Password:string;
    creadaEn:Date;
    estado:boolean;
    rol : string;

    constructor(){
        this.id= new Date().getTime();
        this.estado=false;
        this.creadaEn = new Date();
    }


}