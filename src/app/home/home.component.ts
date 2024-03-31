import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private router: Router,
    private itemService: ItemService) {}

    onGoToTrousers() {
      this.itemService.itemType = "trouser";
      this.router.navigate(["/products", this.itemService.itemType]);
    }
    
    onGoToShirts() {
      this.itemService.itemType = "shirt";
      this.router.navigate(["/products", this.itemService.itemType]);
    }

    onGoToShoes() {
      this.itemService.itemType = "shoe";
      this.router.navigate(["/products", this.itemService.itemType]);
    }

}
