import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges, OnDestroy {

  constructor() {
    // instancja klasy
    console.log('constructor')
  }

  ngOnInit() {
    // wyrenderowanie komponentu w DOM
    console.log('ngOnInit')
  }

  ngOnChanges() {
    // wyrenderowanie komponentu w DOM gdy komponent  zastaje zasilony danymi 
    console.log('ngOnChanges')
  }

  ngOnDestroy() {
    // wyrenderowanie komponentu w DOM gdy komponent umiera
    console.log('ngOnDestroy')
  }
}
