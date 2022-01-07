import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../data/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigate(['users']);
    }

  }

  login() {
    this.authService.login(this.email,this.password).subscribe((result)=>{
      console.log(result);
      let token = <string> result.body

      localStorage.setItem('token',token)
      this.router.navigate(['users']);

    },(err) =>{
      console.error('[error]',err.message);
      alert('error');

    })
  }

}
