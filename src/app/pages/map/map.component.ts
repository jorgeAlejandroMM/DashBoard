import { Component, OnInit } from '@angular/core';
// import { environment } from 'src/environments/environment';
import *  as Mapboxgl from 'mapbox-gl';
import { ComercioService } from 'src/app/services/comercios.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

   mapa:Mapboxgl.Map;
   marker:Mapboxgl.Marker;
   Coordenadas:Array<any>=[]
constructor(private servicecommerce:ComercioService){

 
}

  ngOnInit() {
   
    (Mapboxgl as any).accessToken = 'pk.eyJ1Ijoiam9yZ2VhbGVqYW5kcm8iLCJhIjoiY2tjYjg4ZDVjMDQ3ODJ6bnk0MmFncWs5YSJ9.-NZyiDH6Iqz_XyLbJITdeg'
    this.mapa = new Mapboxgl.Map({
    container: 'Mapa', 
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-68.13734351262877, 45.137451890638886], //Longtud y Latitud, 
    zoom: 5 
    });

    this.marker = new Mapboxgl.Marker({
      draggable: true
      });
      this.servicecommerce.getCommercesLayer().subscribe((data:any)=>{
        data.forEach((elemts:any)=>{
          this.Coordenadas.push(elemts['geometry'].coordinates); 
        })
        console.log(...this.Coordenadas[0]);

      });
   
      this.crearMarcador(-68.13734351262877, 45.137451890638886);

}

crearMarcador(lng :number , lat : number){
  // const coordinates = document.getElementById('coordinates');
  const marker = new Mapboxgl.Marker({
    draggable: true
    })
    .setLngLat([lng, lat])
    .addTo(this.mapa);

    marker.on('drag', ()=>{
      console.log(marker.getLngLat());
      
    });

    // this.mapa.on('load', ()=> {
    //   this.mapa.addSource('maine', {
    //   'type': 'geojson',
    //   'data': {
    //   'type': 'Feature',
    //   'geometry': {
    //   'type': 'Polygon',
    //   'coordinates': [
    //   [
    //   [-67.13734351262877, 45.137451890638886],
    //   [-66.96466, 44.8097],
    //   [-68.03252, 44.3252],
    //   [-69.06, 43.98],
    //   [-70.11617, 43.68405],
    //   [-70.64573401557249, 43.090083319667144],
    //   [-70.75102474636725, 43.08003225358635],
    //   [-70.79761105007827, 43.21973948828747],
    //   [-70.98176001655037, 43.36789581966826],
    //   [-70.94416541205806, 43.46633942318431],
    //   [-71.08482, 45.3052400000002],
    //   [-70.6600225491012, 45.46022288673396],
    //   [-70.30495378282376, 45.914794623389355],
    //   [-70.00014034695016, 46.69317088478567],
    //   [-69.23708614772835, 47.44777598732787],
    //   [-68.90478084987546, 47.184794623394396],
    //   [-68.23430497910454, 47.35462921812177],
    //   [-67.79035274928509, 47.066248887716995],
    //   [-67.79141211614706, 45.702585354182816],
    //   [-67.13734351262877, 45.137451890638886]
    //   ]
    //   ]
    //   }
    //   }
    //   });
    //   this.mapa.addLayer({
    //   'id': 'maine',
    //   'type': 'fill',
    //   'source': 'maine',
    //   'layout': {},
    //   'paint': {
    //   'fill-color': '#088',
    //   'fill-opacity': 0.8
    //   }
    //   });
    //   });


  }


  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
}