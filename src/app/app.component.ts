import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './data/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'last-app';
  name = ""
  constructor(private authService:AuthService,private router:Router){

  }
}
