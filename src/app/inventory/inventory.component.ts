import { Component } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  constructor(public itemService: ItemService) {}

}
