import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, OnInit } from "@angular/core";
import { tokenNotExpired, JwtHelper } from "angular2-jwt";
import { Token } from "./token.model";
import { Subject } from "rxjs/Subject";
import {Router} from '@angular/router';

@Injectable()
export class AuthService implements OnInit {
  error = new Subject<string>();
  jwt: JwtHelper;

  constructor(private http: HttpClient, private router: Router) {
    this.jwt = new JwtHelper();
  }

  ngOnInit() {
    this.error = null;
  }
  //test123
  //t@t.de
  //hallo1234

  public signupUser(username: string, email: string, password: string) {
    this.http.post("https://pr0jectzer0.ml/api/user",
      {'name': username, 'password': password, 'email': email})
      .subscribe(
      data => {
        this.signinUser(email, password);
      }, err => {
        this.error.next(err.error.email);
      }
    );
  }

  public signinUser(email: string, password: string) {
    this.http.post<Token>("https://pr0jectzer0.ml/api/user/login", {'email': email, 'password': password})
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/library']);
        },
        err => {
          this.error.next(err.error.error);
        }
      );
  }

  public signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public getID() {
    return this.jwt.decodeToken(this.getToken()).sub;
  }

  public isAuthenticated() {
    return tokenNotExpired(null, this.getToken());
  }
}
