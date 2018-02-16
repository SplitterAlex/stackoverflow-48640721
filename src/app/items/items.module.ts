import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { ItemsService } from './items.service';
import { CreateItemComponent } from './create-item/create-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemsListComponent } from './list/items-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ItemsRoutingModule
  ],
  declarations: [
    ItemsComponent,
    CreateItemComponent,
    EditItemComponent,
    ItemsListComponent
  ],
  providers: [ItemsService]
})
export class ItemsModule { }
