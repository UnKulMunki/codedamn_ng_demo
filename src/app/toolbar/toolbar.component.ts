import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  opened: boolean;

  lightMenu = false;

  invertMenuColor() {
    this.lightMenu = !this.lightMenu;
    console.log("LightMenu: " + this.lightMenu);
  }



}
