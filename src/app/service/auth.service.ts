import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { User } from '../models/user';
import { tap } from 'rxjs';
import { map } from 'jquery';
import { Signup } from '../models/signup';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.pathApi;
  }

  consoleThis() {}

  getAll(p:number) {
    // return this.http.get<User>(this.baseUrl + '/api/users');
    return this.http.get<User>(this.baseUrl+'/api/users/?page='+p+'&size=20&sort=id,ASC')
  }

  login(data: Login) {
    return this.http.post(this.baseUrl + '/api/auth/login', data);
  }

  signUp(data: Signup) {
    return this.http.post(this.baseUrl + '/api/auth/signup', data);
  }

  get isLogged():boolean {
    return localStorage.getItem('utente') != null;
  }


}