import { Router } from '@angular/router';
import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-item',
  template: `
    <p>
      Create new Item
    </p>
    <form [formGroup]="itemForm" (ngSubmit)="onSubmit()">

      <input type="text" formControlName="item">

      <button type="submit">Create</button>
    </form>
  `,
  styles: []
})
export class CreateItemComponent implements OnInit {

  public itemForm: FormGroup;

  constructor(private is: ItemsService, private router: Router) {
    this.itemForm = new FormGroup({
      'item': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.itemForm.valid) {
      return;
    }

    const values = this.itemForm.getRawValue();
    this.is.createItem(values.item).subscribe(
      item => {
        console.log('Item Created', item);
        this.router.navigate(['items']);
      }
    );
  }

}
