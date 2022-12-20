import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { User } from '../model/user';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://localhost:44337/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable()

  constructor(private Http: HttpClient) { }

  Login(model: any) {
    return this.Http.post(this.baseUrl + 'account/Login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user)
        }
      })
    )
  }

  Register(model: any) {
    return this.Http.post(this.baseUrl + 'account/Register', model).pipe(
      map((response: User) => {
        const user = response
        if(user) {
          localStorage.setItem('user', JSON.stringify(user))
          this.currentUserSource.next(user)
        }
      })
    )
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user)
  }

  Logout() {
    localStorage.removeItem('user')
    this.currentUserSource.next(null)
  }
}
