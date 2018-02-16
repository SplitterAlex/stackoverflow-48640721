import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-list',
  template: `
    <a [routerLink]="['create']">Create Item</a>
    <p>
      My Items:
    </p>
    <ul>
      <li *ngFor="let item of items$ | async; let i = index">
        {{item}} <a [routerLink]="[i, 'edit']">Edit me</a>
      </li>
    </ul>
  `,
  styles: []
})
export class ItemsListComponent {

  public items$: Observable<string[]>;

  constructor(private is: ItemsService) {
    console.log('constructor');
    this.is.fetchItems().subscribe();
    this.items$ = this.is.items$;
  }

}
