import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  error?: string;
  itemList!: Item[];
  items:string[] = [
    'text', 'text', 'text', 'text', 'text', 'text'
  ];

  constructor(public dialog:MatDialog, public itemService: ItemService) { }
  getItem(): void {
    this.itemService.getItem().subscribe((list: Item[]) => {
      this.itemList = list;
    }, (err) => {
      this.error = err.error;
    })
  }

  async openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '250px',
      data: { items: this.items },
    });
  };

  ngOnInit():void{    
  }
}
