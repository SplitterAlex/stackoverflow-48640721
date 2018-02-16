import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-item',
  template: `
    <p>
      Edit Item!
    </p>
    <form [formGroup]="itemForm" (ngSubmit)="onSubmit()">

      <input type="text" formControlName="item">

      <button type="submit">Edit</button>
    </form>
  `,
  styles: []
})
export class EditItemComponent implements OnInit {

  public item;
  public itemForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private is: ItemsService) {
    this.itemForm = new FormGroup({
      item: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: { item: string }) => {
      this.item = data.item;
      this.itemForm.setValue(data);
      });
  }

  onSubmit() {
    if (!this.itemForm.valid) {
      return;
    }
    this.is.editItem(this.route.snapshot.params.itemId, this.itemForm.getRawValue().item)
      .subscribe(
        () => this.router.navigate(['items']),
        error => console.error(error)
      );
  }

}
