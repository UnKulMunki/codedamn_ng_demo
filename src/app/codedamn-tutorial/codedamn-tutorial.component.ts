import { Component } from "@angular/core";

@Component({
  selector: "codedamn-tutorial",
  templateUrl: "./codedamn-tutorial.component.html"
})
export class CodeDamnTutorialComponent {
  // The code in this class drives the component's behavior.
  constructor() {}

  username = "TekMan";
  // changeUsername(ev) {
  //   this.username = ev.target.value;
  // }

  myVal = "bugger";
  aCustomString = "";
  myFunct1(event) {
    console.log(event);
    this.aCustomString += event.target.value;
  }
}
