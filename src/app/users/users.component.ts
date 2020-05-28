import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<any> = new Array();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){
		this.usersService.listUsers().subscribe(users=>{
			this.users = users;
		}, err => {
			console.log('Error on list users.',err);
		})
	}

}
