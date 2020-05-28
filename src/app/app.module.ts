import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './contacts/contacts.service';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
	declarations: [
			AppComponent,
			ContactsComponent,
			UsersComponent,
			LoginComponent
		],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule		
	],
	providers: [HttpClientModule,ContactsService],
	bootstrap: [AppComponent]
})
export class AppModule { }
