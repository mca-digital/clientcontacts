import { NgModule } from "@angular/core";
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ContactsComponent } from './contacts/contacts.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '', redirectTo: '/', pathMatch:'full' },
    // { path: '**', component: PaginaNaoEncontradaComponent },
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}
