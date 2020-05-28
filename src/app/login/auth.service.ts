import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users/user';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})
export class AuthService {
	private usuarioAutenticado:boolean = false;
	mostrarMenuEmitter = new EventEmitter<boolean>();
	userEmitter = new EventEmitter<User>();
	accessTokenEmitter = new EventEmitter<String>();

	constructor(private router:Router, private http:HttpClient) {}
	
	fazerLogin(user:User){
		this.http.post(environment.apiUrl.concat("user/login"), user)
			.subscribe(
				value => {
					if(value['access_token'] != undefined){
						this.usuarioAutenticado = true;
						this.mostrarMenuEmitter.emit(true);
						
						localStorage.setItem('loggedUser', value['user']);
						localStorage.setItem('accessToken', value['access_token']);

						this.router.navigate(['/']);
					}
				},
				err => {
					console.log(err);
				}
			);
    }

    usuarioEstaAutenticado(){
        return this.usuarioAutenticado;
    }
}
