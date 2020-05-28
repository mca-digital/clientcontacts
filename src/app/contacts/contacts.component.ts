import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts/contacts.service';
import { ContactModel } from '../contacts/contact.model';

@Component({
  	selector: 'app-contacts',
  	templateUrl: './contacts.component.html',
  	styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

	contact: ContactModel = new ContactModel();
	contacts: Array<any> = new Array();

  	constructor(private contactsService: ContactsService) { }

  	ngOnInit(): void {
		this.listContacts();
	}
	  
	listContacts(){
		this.contactsService.listContacts().subscribe(contacts=>{
			this.contacts = contacts;
		}, err => {
			console.log('Error on list contacts.',err);
		})
	}

	cadastrar(){
		this.contactsService.storeContact(this.contact).subscribe(
			contact => {
				this.contact = new ContactModel();
				this.listContacts();
			}, 
			err => {
				console.log('Erro ao cadastrar contato.', err);
			}
		)
	}

	atualizar(id: number){
		this.contactsService.updateContact(id, this.contact).subscribe(
			contact => {
				this.contact = new ContactModel();
				this.listContacts();
			}, 
			err => {
				console.log('Erro ao atualizar contato.', err);
			}
		)
	}

	deletar(id:any){
		this.contactsService.deleteContact(id).subscribe(
			contact => {
				this.contact = new ContactModel();
				this.listContacts();
			}, 
			err => {
				console.log('Erro ao deletar contato.', err);
			}
		)
	}
}

