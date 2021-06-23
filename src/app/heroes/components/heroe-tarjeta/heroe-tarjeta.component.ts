import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
    mat-card{
      margin-top:20px;
    } 
    mat-card-actions button{
      margin-top:5px;
    }
    `
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!:Heroes;

  constructor() { }

  ngOnInit(): void {
  }

}
