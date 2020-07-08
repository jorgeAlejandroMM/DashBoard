import { Component, OnInit } from '@angular/core';
import { ComercioService } from 'src/app/services/comercios.service';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  //Titulos  que hacen referecnia a la data
  public doughnutChartLabels:string[] = [];
  //Data a graficas
  public doughnutChartData:number[] = [];
  //tipo de grafica
  public doughnutChartType:string = 'doughnut';
  
  constructor(private servicecommerce:ComercioService){

  }

  ngOnInit(){

    this.servicecommerce.getCommercesGraph().subscribe((data:any)=>{
       let numeros:number;
      data.forEach((elemts:any)=>{
        this.doughnutChartLabels.push(elemts['name']);
        // console.log(Number(elemts['sales']));
        numeros=Number(elemts['sales']);
        this.doughnutChartData.push(numeros);
      

      });
    });
  //   console.log(this.doughnutChartLabels);
  // console.log( this.doughnutChartData);
  
  }

  public barChartColors: Color[] = [
    { backgroundColor: ['purple','green', 'red','yellow', 'blue','orange', 'red','pink'] },
  
  ]
  // events
  public chartClicked(e:any):void {
    // console.log(e);
  }

  public chartHovered(e:any):void {
    // console.log(e);
  }


  public numeros_random(){

    this.doughnutChartData = [
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100)
    ];

  }


}
