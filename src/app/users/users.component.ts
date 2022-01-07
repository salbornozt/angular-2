import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../data/auth/auth.service';
import { UserModel } from '../domain/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList :Array<UserModel>;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.usersList = [];
    if(!localStorage.getItem("token")){
      this.router.navigate(["login"])
    }
    this.authService.getUsers().subscribe((data) =>{
      let list = <Array<UserModel>>data.body;
      for(let u of list){
        this.usersList.push(u);


      }
      console.log(this.usersList);

    },(err) =>{

    })
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
