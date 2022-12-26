import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  baseUrl = 'https://localhost:44337/api/';
  validationErrors : string[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  test404() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
  test400() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
  test400ErrorValidation() {
    this.http.post(this.baseUrl + 'account/Register', {}).subscribe(response => {
      console.log(response);
    }, error => {
      this.validationErrors = error;
      console.log(error);
    })
  }
  test401() {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
  test500() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

}
