import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from './item.service';
import { Item } from './item';

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
      this.itemService.cartTotalPrice = this.itemService.totalCartItems.map(order => order.price * order.number).reduce((acc, num) => acc + num, 0);
      this.router.navigateByUrl("cart");
    }

    clickOnInventory() {
      this.router.navigateByUrl("inventory");
      }

    clickOnLogo() {
      this.router.navigateByUrl("home");
    }

    onGoToTrousers() {
      this.router.navigateByUrl("trousers");
    }
    onGoToShirts() {
      this.router.navigateByUrl("shirts");
    }
    onGoToShoes() {
      this.router.navigateByUrl("shoes");
    }

}
