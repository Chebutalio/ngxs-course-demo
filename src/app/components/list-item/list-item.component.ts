import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent {

  public form: any;
  public showItemAdded: boolean = false;

  constructor(private router: Router) {
    this.form = new FormGroup({
      listItem: new FormControl('')
    });
  }

  public submitItem(): void {
    this.showItemAdded = true;
    const item = this.form.get('listItem').value;
    this.form.reset();
    setTimeout(() => {
      this.showItemAdded = false;
    }, 2000);
  }

  public viewList(): void {
    this.router.navigate(['list']).then(() => {});
  }
}
