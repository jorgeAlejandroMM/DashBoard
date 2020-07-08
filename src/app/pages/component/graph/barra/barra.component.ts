import { Component, OnInit } from '@angular/core';
import { ComerceModel } from 'src/app/model/commerces.model';
import { ComercioService } from 'src/app/services/comercios.service';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  chart: any;

  comercio:ComerceModel[]=[]
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true; 
  public barChartLabels:string[] = [];
  public barChartData:any[] = [{data: [], label: 'Commerces'}];

constructor(private servicecommerces:ComercioService){
}

ngOnInit(): void {

  this.CargarComercio()
}

CargarComercio(){

  this.servicecommerces.getCommercesgraph().subscribe((data:any)=>{ 

    data.forEach(elemts=>{
    this.barChartLabels.push(elemts['name']);
    this.barChartData[0].data.push(elemts['sales'])
    
    })
  })

}

public barChartColors: Color[] = [
  { backgroundColor: 'red' },
 
]


// events
public chartClicked(e:any):void {
  // console.log(e);
}

public chartHovered(e:any):void {
  // console.log(e);
}

public randomize():void {
  // Only Change 3 values
  // let data = [
  //   Math.round(Math.random() * 100),
  //   59,
  //   80,
  //   (Math.random() * 100),
  //   56,
  //   (Math.random() * 100),
  //   40,
  //    ];
  // let clone = JSON.parse(JSON.stringify(this.barChartData));
  // clone[0].data = data;
  // this.barChartData = clone;

}
}
