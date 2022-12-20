import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  model: any = {}
  currentUser$: Observable<User>;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$
  }

  Submit() {
    this.accountService.Login(this.model).subscribe(response => {
    }, error => {
      console.log(error);
    })
  }

  logOut() {
    this.accountService.Logout()
  }

}
