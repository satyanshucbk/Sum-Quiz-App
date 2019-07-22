import { Directive, ElementRef, HostListener,Input } from '@angular/core';
 
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }
  @Input() isCorrectOption: boolean;
 
  @HostListener('click') onClick() {
    this.highlight();
  }

  private highlight() {
    if(this.isCorrectOption){
      this.el.nativeElement.style.backgroundColor = "green";
    }else{
      this.el.nativeElement.style.backgroundColor = "red";
    }
    console.log(this.isCorrectOption);
  }
}