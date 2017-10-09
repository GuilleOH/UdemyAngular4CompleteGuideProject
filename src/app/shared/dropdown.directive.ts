import {
  Directive,
  HostListener,
  HostBinding,
  Renderer2,
  ElementRef,
  Input} from '@angular/core';

@Directive({
  selector: '[appDropdown]'

})
export class DropdownDirective{

  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  @HostListener('click') toggleOpen(eventData: Event) {
    
    this.isOpen = !this.isOpen;

  }


}
