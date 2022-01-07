import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthModel } from 'src/app/domain/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://127.0.0.1:3000/api/login/"
  url2 ="http://localhost:3000/api/user"
  constructor(private http:HttpClient) { }

  login(email:string,password:string) {
    let data = {
      email : email,
      password : password
    }
    return this.http.post<AuthModel>(this.url,data);

  }

  logup(data){
    return this.http.post<AuthModel>(this.url2,data)
  }

  getUsers(){
    var token = localStorage.getItem('token');
      var header = new HttpHeaders({
        'Authorization' : 'Bearer '+token
      });
      var options = ({
        headers:header
      });
    return this.http.get<AuthModel>(this.url2,options)
  }
}
