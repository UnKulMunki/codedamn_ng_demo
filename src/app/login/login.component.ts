import { Component, OnInit } from '@angular/core';
import { MyAuthService } from '../my-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private MyAuth: MyAuthService ) { }

  ngOnInit(): void {
  }

  userLogin( event ){
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.MyAuth.getUserDetails(username, password);

    console.log( username, password );
  }
}
