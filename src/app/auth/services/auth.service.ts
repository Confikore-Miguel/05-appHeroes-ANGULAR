import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap , map} from 'rxjs/operators';

import { Auth } from '../interfaces/auth.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string= environment.baseUrl;
  private auth:Auth | undefined;

  get usuario(){
    return {...this.auth}
  }

  constructor( private http:HttpClient ) { }

  verificaAuth():Observable<boolean> {

    if ( !localStorage.getItem('token')){
      return of(false);
    }
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
                .pipe(
                  map( auth => {
                    this.auth = auth;
                    return true;
                  })
                )
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
                .pipe(
                  tap( auth => this.auth=auth),
                  tap( auth => localStorage.setItem('token',auth.id)),
                )
  }
}
