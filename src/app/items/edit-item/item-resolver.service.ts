import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ItemsService } from '../items.service';


@Injectable()
export class ItemResolverService implements Resolve<string> {

  constructor(private is: ItemsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {

    return this.is.fetchItem(+route.paramMap.get('itemId')).pipe(
      take(1),
      map(item => {
        if (item) {
          return item;
        } else {
          this.router.navigate(['items']);
          return null;
        }
      })
    );
  }

}
