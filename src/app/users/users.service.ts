import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../users/user';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	accessToken = new String();
	loggedUser = {};
	
  	constructor(private http:HttpClient,private authService:AuthService) { }

  	listUsers(): Observable<any>{	
		this.accessToken = localStorage.getItem('accessToken');
		this.loggedUser = localStorage.getItem('loggedUser');

		const httpOptions = {
			headers: new HttpHeaders(
				{
					'Content-Type':  'application/json',
					'Authorization': 'Bearer ' + this.accessToken
				}
			)
		};

		return this.http.get(environment.apiUrl.concat('user/all'),httpOptions);
	}
}
