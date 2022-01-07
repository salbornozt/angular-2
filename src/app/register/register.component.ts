import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../data/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }
  name = "";
  lastname = "";
  document = "";
  email = "";
  password = "";
  ngOnInit(): void {

  }

  register(){
    let user = {
      name : this.name,
      lastname: this.lastname,
      email: this.email,
      document : this.document,
      password: this.password
    }
    this.authService.logup(user).subscribe((data)=>{
      console.log(data);
      alert('user registered');

    },(err) =>{
      console.error('errr' ,err);

    })
  }

}
