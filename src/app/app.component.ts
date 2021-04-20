import { Component } from "@angular/core";

// /** MyLogDecorator - Example of a class decorator */
// function myLogDecorator( classname ){
//   console.log( classname );
// }

// @myLogDecorator
// class MySampleClass{
//   constructor(a1, a2) {
//     console.log( "constructor fired!");
//   }
// }

// const MyClass = new  MySampleClass( 5, 10);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  opened = false;
  
  lightMenu = false;

  invertMenuColor() {
    this.lightMenu = !this.lightMenu;
    console.log("LightMenu: " + this.lightMenu);
  }

  appLogout(){
    console.log( "app Logout clicked");
  }
  // constructor() {
  //   console.log (this.aSimpleMethod("log this"));
  // }

  // aSimpleMethod( a ){
  //     return a;
  // }

}