import { Component, OnInit } from '@angular/core';
import { ComerceModel } from 'src/app/model/commerces.model';
import { ComercioService } from 'src/app/services/comercios.service';

@Component({
  selector: 'app-commerces-table',
  templateUrl: './commerces-table.component.html',
  styleUrls: ['./commerces-table.component.css']
})
export class CommercesTableComponent implements OnInit {


  CommerceInfo:ComerceModel[]=[];
  constructor(private servicecommerces:ComercioService) { }

  ngOnInit(): void {
    this.CargarInfoCommerce();
  }


  CargarInfoCommerce(){

  this.servicecommerces.getCommerces().subscribe((data:Array<any>)=>{
    this.CommerceInfo=data; 
    // console.table (this.CommerceInfo);
    })
    // console.log(this.CommerceInfo);
  }

}
