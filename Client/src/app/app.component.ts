import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    this.http.get('https://localhost:44337/api/users').subscribe(users => {
      this.users = users;
    }, error => {
      console.log(error, 'error');
    }, () => {
      console.log('completed');
    })
  }

}
