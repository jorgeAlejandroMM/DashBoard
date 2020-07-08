export class ComerceModel{


        id: number
        name: string
        nit: number
        address: string
        phone: number
        owner: string
        schedule: Date;
        days: Array<any>;
        sales: number;
        // schedule: '8:00 am – 5:00 pm'

    
    constructor(){
        this. days=['Lunes', 'Martes','Miercoles','Jueves', 'Viernes'];
        this.schedule = new Date();
    }

}

