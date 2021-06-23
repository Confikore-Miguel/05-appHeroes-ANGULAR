import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url: string = environment.baseUrl;
  
  constructor( private http: HttpClient ) { }


  getHeroes():Observable<Heroes[]>{
    return this.http.get<Heroes[]>(this.url+'/heroes');
  }

  getHeroe( id:string ):Observable<Heroes>{
    return this.http.get<Heroes>(this.url+`/heroes/${id}`);
  }
  
  getSugerencias( termino:string ):Observable<Heroes[]>{
    const params = {
      q:termino,
      _limit:'6'
    }
    return this.http.get<Heroes[]>(this.url+`/heroes/`,{params});
  }
  agregarHeroe( heroe:Heroes ):Observable<Heroes>{
    return this.http.post<Heroes>(this.url+`/heroes`,heroe);
  }
  editarHeroe( heroe:Heroes ):Observable<Heroes>{
    return this.http.put<Heroes>(this.url+`/heroes/${heroe.id}`,heroe);
  }
  eliminarHeroe( id:string ):Observable<any>{
    return this.http.delete<any>(this.url+`/heroes/${id}`);
  }

}
