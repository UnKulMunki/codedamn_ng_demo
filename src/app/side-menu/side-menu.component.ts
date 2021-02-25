import { Component } from "@angular/core";

@Component({
  selector: "side-menu",
  templateUrl: "./side-menu.component.html"
  // styles: ["div { font-weight: bolder; }"]
  // styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  // The code in this class drives the component's behavior.
  constructor() {}

  myFavLang = [
    { name: "html", type: "frontend" },
    { name: "css", type: "frontend" },
    { name: "javascript", type: "frontend" },
    { name: "bootstrap", type: "frontend" },
    { name: "angular", type: "frontend" },
    { name: "vue", type: "frontend" },
    { name: "nodejs", type: "backend" },
    { name: "php", type: "backend" },
    { name: "C", type: "backend" },
    { name: "ruby", type: "backend" },
    { name: "delphi", type: "backend" }
  ];

  counter = 0;

  countUp() {
    this.counter++;
  }
}
