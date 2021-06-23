import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img{
      margin-left:10px; 
      width:98%;
      border-radius: 5px;
    }
    .titulo{
      margin-left:50px;
      text-align:center;
    }
    button{
      margin-left: 18px;
    }
    `
  ]
})
export class HeroeComponent implements OnInit {

  @Input() heroe!:Heroes;

  constructor( 
    private route:ActivatedRoute,
    private heroeService:HeroesService  
  ) { }
  // this.heroeService.getHeroe(this.id)
  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap( ({id}) => this.heroeService.getHeroe(id))
      )
      .subscribe(heroe=> this.heroe= heroe);
  }

}
