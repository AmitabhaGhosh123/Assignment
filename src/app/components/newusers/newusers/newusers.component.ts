import { Component, OnInit } from '@angular/core';
import { NewUsersService } from 'src/app/services/new-users/new-users.service';

@Component({
  selector: 'app-newusers',
  templateUrl: './newusers.component.html',
  styleUrls: ['./newusers.component.scss']
})
export class NewusersComponent implements OnInit {

  allUsers:any = [];

  constructor(private newUsersService:NewUsersService) {}

  ngOnInit(): void {
    this.getNewUsersData();
  }

  /*function to get list of new users*/
  getNewUsersData() {
    this.newUsersService.getUsersData().subscribe(users=>{
      this.allUsers = users;
    },
    (error)=>{
      this.allUsers = [];
    })
  }

}
