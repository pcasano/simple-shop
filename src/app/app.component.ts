import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'simple-shop';

  constructor(
    private router: Router,
    public itemService: ItemService) {}

    clickOnCart() {
      this.router.navigateByUrl("cart");
    }

    clickOnInventory() {
      this.router.navigateByUrl("inventory");
      }

}
