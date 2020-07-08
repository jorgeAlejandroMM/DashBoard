import { Component, OnInit } from '@angular/core';
import { ComercioService } from 'src/app/services/comercios.service';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  public radarChartLabels:string[] = [];

  public radarChartData:any = [
    {data: [], label: 'Commerce'},
  ];
  public radarChartType:string = 'radar';

  constructor(private servicecommerce:ComercioService ) { }

  ngOnInit(): void {
    this.servicecommerce.getCommercesGraph().subscribe((data:any)=>{
      let numeros:number;
     data.forEach((elemts:any)=>{
       this.radarChartLabels.push(elemts['name']);
       // console.log(Number(elemts['sales']));
    this.radarChartData[0].data.push(elemts['sales'])
   

     });
   });
  }

  public barChartColors: Color[] = [
    { backgroundColor: 'blue', 
    // borderColor: 'rgba(225,10,24,0.2)',
    pointBackgroundColor:  ['purple','green', 'red','yellow', 'blue','orange', 'red','pink'],
    // pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'yellow'},

      // { backgroundColor: '', 
      // borderColor: 'rgba(225,10,24,0.2)',
      // pointBackgroundColor: 'aqua',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(225,10,24,0.2)'},
        
  ]
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }



}
