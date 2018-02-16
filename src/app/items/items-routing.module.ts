import { ItemsListComponent } from './list/items-list.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ItemsComponent } from './items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemResolverService } from './edit-item/item-resolver.service';

const routes: Routes = [
  {
      path: '',
      // runGuardsAndResolvers: 'always',
      component: ItemsComponent,
      children: [
        {
          path: '',
          component: ItemsListComponent
        },
        {
          path: 'create',
          component: CreateItemComponent,
        },
        {
          path: ':itemId/edit',
          component: EditItemComponent,
          resolve: {
            item: ItemResolverService
          }
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ItemResolverService]
})
export class ItemsRoutingModule { }
