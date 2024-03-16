import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  constructor(
    public itemService: ItemService,
    private router: Router) {}

  onGoHome() {
    this.router.navigateByUrl("home");
  }

}
