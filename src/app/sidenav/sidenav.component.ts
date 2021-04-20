import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  // The code in this class drives the component's behavior.
  constructor() { }

  closeSidenav(){
    console.log( "Sidenav item clicked.");
  }

  ngOnInit(): void {
  }

}
