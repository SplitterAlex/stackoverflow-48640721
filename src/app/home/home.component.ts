import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      My Home!
    </p>
    <a routerLink="/items">go to items</a>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
