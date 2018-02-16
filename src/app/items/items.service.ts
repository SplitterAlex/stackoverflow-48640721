import { Injectable } from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, catchError, map } from 'rxjs/operators';

let testItems = ['Torch', 'Knife', 'Tent', 'Fork', 'Teddy'];

@Injectable()
export class ItemsService {

  // caching fetched items
  public items$: BehaviorSubject<string[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  public createItem(itemToCreate: string): Observable<string> {
    // api call - create Item
    return of(itemToCreate).pipe(
      tap(createdItem => testItems = testItems.concat([createdItem]))
    );
  }

  public editItem(index: number, data: string) {
    // api call - edit item
    return of(data).pipe(tap(editedItem => testItems[index] = data));
  }

  fetchItems(): Observable<string[]> {
    // api call - fetch items
    return of(testItems).pipe(
      tap(items => this.items$.next(items))
    );

  }

  fetchItem(itemId: number): Observable<string> {
    // api call - fetch item
    const item = testItems[itemId];
    return of(item ? item : null);
  }

}
