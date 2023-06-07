import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../model/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  members() {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  member(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username )
  }
}
