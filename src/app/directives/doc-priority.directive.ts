import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ApplicationDocumentPriority} from '../shared/models/enums';

@Directive({
  selector: '[appDocPriority]'
})
export class DocPriorityDirective implements OnInit {

  @Input() appDocPriority = '';

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if (this.appDocPriority) {
      switch (this.appDocPriority.toUpperCase()) {
        case  ApplicationDocumentPriority[ApplicationDocumentPriority.RED] :
          this.el.nativeElement.style.backgroundColor = 'red';
          break;
        case  ApplicationDocumentPriority[ApplicationDocumentPriority.ORANGE]:
          this.el.nativeElement.style.backgroundColor = 'orangered';
          break;
        case ApplicationDocumentPriority[ApplicationDocumentPriority.YELLOW]:
          this.el.nativeElement.style.backgroundColor = 'yellow';
          break;
        case ApplicationDocumentPriority[ApplicationDocumentPriority.GREEN] :
          this.el.nativeElement.style.backgroundColor = 'green';
          break;
      }
    }
  }
}
