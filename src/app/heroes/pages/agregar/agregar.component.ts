import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'


import { DialogComponent } from '../../components/dialog/dialog.component';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius:5px;
    }
    `
  ]
})
export class AgregarComponent implements OnInit {

  titulo:string='Nuevo Héroe';

  publishers=[
    {
      id:'DC Comics',
      desc:'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    }
  ];

  heroe:Heroes={
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    superhero:'',
    alt_img:''
  }

  constructor( 
    private heroesService:HeroesService,
    private activatedRoute:ActivatedRoute,
    private route:Router ,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog 
  ) { }

  ngOnInit(): void {

    if(!this.route.url.includes('editar')){
      return;
    }
    this.titulo='Editar Héroe';
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.heroesService.getHeroe(id))
    )
    .subscribe( heroe => this.heroe = heroe);
  }


  guardar(){
    if( this.heroe.superhero.trim().length === 0){
      return;
    }   
    if(this.heroe.id){
      this.heroesService.editarHeroe(this.heroe)
          .subscribe(heroe => this.mostrarSnakbar('Actualizado!!'));
    }else{
      this.heroesService.agregarHeroe(this.heroe )
          .subscribe(heroe =>{
            this.route.navigate(['/heroes/editar',heroe.id]);
            this.mostrarSnakbar('Heroe creado!!');
          }); 
    }
  }
  borrarHeroe(id:string){
    const dialog= this.dialog.open(DialogComponent,{
      width:'300px',
      data:this.heroe
    });

    dialog.afterClosed()
          .pipe(
            switchMap(result=> (result)?this.heroesService.eliminarHeroe(id):'')
          )
          .subscribe(response =>{
            this.route.navigate(['/heroes']);
            this.mostrarSnakbar('Heroe Eliminado!')
          })
  }

  mostrarSnakbar( mensaje:string){
    this._snackBar.open(mensaje,'Cerrar', {
      duration: 5 * 1000,
      horizontalPosition:'center',
      verticalPosition:'top'
    });
  }
}
