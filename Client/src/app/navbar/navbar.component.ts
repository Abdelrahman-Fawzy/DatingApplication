import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  model: any = {}
  currentUser$: Observable<User>;

  constructor(private accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$
  }

  Submit() {
    this.accountService.Login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members')
    }, error => {
      console.log(error);
      this.toastr.error(error.error)
    })
  }

  logOut() {
    this.accountService.Logout()
    this.router.navigateByUrl('/')
  }

}
