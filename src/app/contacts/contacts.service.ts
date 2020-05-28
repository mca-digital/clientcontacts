import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactModel } from './../contacts/contact.model';
import { environment } from './../../environments/environment';

@Injectable({
  	providedIn: 'root'
})
export class ContactsService {
	private accessToken:string = '';
	private loggedUser:any = '';
	private httpOptions:any = {};

	constructor(private http:HttpClient) { 
		this.accessToken = localStorage.getItem('accessToken');
		this.loggedUser = localStorage.getItem('loggedUser');
		this.httpOptions = {
			headers: new HttpHeaders(
				{
					'Content-Type':  'application/json',
					'Authorization': 'Bearer ' + this.accessToken
				}
			)
		};
	}
	  
	listContacts(): Observable<any>{
		return this.http.get(environment.apiUrl.concat("contacts"),this.httpOptions);
	}

	storeContact(contact: ContactModel): Observable<any>{
		return this.http.post(environment.apiUrl.concat("contacts"), contact,this.httpOptions);
	}

	updateContact(id:any, contact: ContactModel): Observable<any>{
		return this.http.put(environment.apiUrl.concat("contacts").concat("/").concat(id), contact,this.httpOptions);
	}

	deleteContact(id:any): Observable<any>{
		return this.http.delete(environment.apiUrl.concat("contacts").concat("/").concat(id),this.httpOptions);
	}
}
