import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit {
  @HostListener('window:click', ['$event']) private windowClick($event) {
    console.log($event);
  }

  /* change de couleur pour chaque touche directionnelle */
  @HostListener('window:keydown', ['$event']) private keyUp($event) {
    switch ($event.key) {
      case 'ArrowUp':
        this.el.nativeElement.style.backgroundColor = 'aqua';
        break;
      case 'ArrowDown':
        this.el.nativeElement.style.backgroundColor = 'green';
        break;
      case 'ArrowLeft':
        this.el.nativeElement.style.backgroundColor = 'red';
        break;
      case 'ArrowRight':
        this.el.nativeElement.style.backgroundColor = 'orange';
        break;

      default:
        break;
    }
    console.log($event);
    console.log(this.el);
  }

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}
}
