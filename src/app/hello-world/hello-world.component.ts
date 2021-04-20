
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
    <div><button (click)="toggleHello()">Hello Toggle</button></div>
    <div *ngIf="helloVisible">
      <hello-world-interpolation></hello-world-interpolation>
      <hello-world-bindings></hello-world-bindings>
      <hello-world-template></hello-world-template>
      <hello-world-ngif></hello-world-ngif>
      <hello-world-di></hello-world-di>
    </div>
    `,
})
export class HelloWorldComponent  {
  // The code in this class drives the component's behavior.
  helloVisible = false;

  toggleHello() {
    this.helloVisible = !this.helloVisible;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/