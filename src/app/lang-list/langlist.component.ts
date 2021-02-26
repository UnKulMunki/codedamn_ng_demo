import { Component } from "@angular/core";

@Component({
  selector: "lang-list",
  templateUrl: "./langlist.component.html"
  // styles: ["div { font-weight: bolder; }"]
})
export class LangListComponent {
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

  // counter = 0;
  // countUp() {
  //   this.counter++;
  // }
}
