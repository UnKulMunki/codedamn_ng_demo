import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[redColored]"
})
export class RedColorDirective {
  constructor(element: ElementRef) {
    // console.log(element.nativeElement);
    element.nativeElement.style.color = "red";
  }

  // -- This works --
  // @HostListener("click") headerClick() {
  //   console.log("Title was clicked.");
  //   alert("I'm Listening...");
  // }

  @HostListener("click", ["$event"])
  elemClicked(elem) {
    console.log("clicked", elem);
  }
}
