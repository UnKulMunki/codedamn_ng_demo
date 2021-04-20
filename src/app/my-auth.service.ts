import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyAuthService {

  constructor( private http: HttpClient ) { }

  getUserDetails(username, password) {
    // Post these details to API server and return user info is correct
    return this.http.post( '/api/auth.php', { username, password }).subscribe( data => { console.log( "API replied with: ", data)});
  }


}
