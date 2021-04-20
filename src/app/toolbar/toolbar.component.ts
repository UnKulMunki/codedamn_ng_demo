// THIS IS NOT BEING USED. It was implemented in the core app.component because of the need to access sidenav vars. 
import { Component, OnInit } from '@angular/core';
// import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  lightMenu = false;

  invertMenuColor() {
    this.lightMenu = !this.lightMenu;
    console.log("LightMenu: " + this.lightMenu);
  }

}
