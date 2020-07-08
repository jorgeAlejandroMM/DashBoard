import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.botonF1').hover(function(){
      $('.btn').addClass('animacionVer');
    })
    $('.contenedor').mouseleave(function(){
      $('.btn').removeClass('animacionVer');
    })
  }

}
