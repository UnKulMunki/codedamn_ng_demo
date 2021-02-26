import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  helloVisible = false;

  toggleHello() {
    this.helloVisible = !this.helloVisible;
  }

}