import { Observable } from 'rxjs';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  currentUser$ : Observable<any>

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$
  }

}
