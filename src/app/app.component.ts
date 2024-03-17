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


    ngOnInit(): void {
      this.itemService.shoeInCart1S = this.initShoeGivenTypeAndSize("first_type", "S");
      this.itemService.shoeInCart1M = this.initShoeGivenTypeAndSize("first_type", "M");
      this.itemService.shoeInCart1L = this.initShoeGivenTypeAndSize("first_type", "L");
      this.itemService.shoeInCart2S = this.initShoeGivenTypeAndSize("second_type", "S");
      this.itemService.shoeInCart2M = this.initShoeGivenTypeAndSize("second_type", "M");
      this.itemService.shoeInCart2L = this.initShoeGivenTypeAndSize("second_type", "L");
      this.itemService.shoeInCart3S = this.initShoeGivenTypeAndSize("third_type", "S");
      this.itemService.shoeInCart3M = this.initShoeGivenTypeAndSize("third_type", "M");
      this.itemService.shoeInCart3L = this.initShoeGivenTypeAndSize("third_type", "L");

      this.itemService.shirtInCart1S = this.initShirtGivenTypeAndSize("first_type", "S");
      this.itemService.shirtInCart1M = this.initShirtGivenTypeAndSize("first_type", "M");
      this.itemService.shirtInCart1L = this.initShirtGivenTypeAndSize("first_type", "L");
      this.itemService.shirtInCart2S = this.initShirtGivenTypeAndSize("second_type", "S");
      this.itemService.shirtInCart2M = this.initShirtGivenTypeAndSize("second_type", "M");
      this.itemService.shirtInCart2L = this.initShirtGivenTypeAndSize("second_type", "L");
      this.itemService.shirtInCart3S = this.initShirtGivenTypeAndSize("third_type", "S");
      this.itemService.shirtInCart3M = this.initShirtGivenTypeAndSize("third_type", "M");
      this.itemService.shirtInCart3L = this.initShirtGivenTypeAndSize("third_type", "L");

      this.itemService.trouserInCart1S = this.initTrousersGivenTypeAndSize("first_type", "S");
      this.itemService.trouserInCart1M = this.initTrousersGivenTypeAndSize("first_type", "M");
      this.itemService.trouserInCart1L = this.initTrousersGivenTypeAndSize("first_type", "L");
      this.itemService.trouserInCart2S = this.initTrousersGivenTypeAndSize("second_type", "S");
      this.itemService.trouserInCart2M = this.initTrousersGivenTypeAndSize("second_type", "M");
      this.itemService.trouserInCart2L = this.initTrousersGivenTypeAndSize("second_type", "L");
      this.itemService.trouserInCart3S = this.initTrousersGivenTypeAndSize("third_type", "S");
      this.itemService.trouserInCart3M = this.initTrousersGivenTypeAndSize("third_type", "M");
      this.itemService.trouserInCart3L = this.initTrousersGivenTypeAndSize("third_type", "L");
    }
    

    private initShirtGivenTypeAndSize(type: string, size: string): Item {
      return {
        type: "shirt",
        model: type,
        number: 0,
        price: 50,
        size: size
      }
    }

    private initShoeGivenTypeAndSize(type: string, size: string): Item {
      return {
        type: "shoe",
        model: type,
        number: 0,
        price: 50,
        size: size
      }
    }

    private initTrousersGivenTypeAndSize(type: string, size: string): Item {
      return {
        type: "trouser",
        model: type,
        number: 0,
        price: 50,
        size: size
      }
    }

    clickOnCart() {
      this.itemService.cartTotalPrice = this.itemService.totalCartItems.map(order => order.price * order.number).reduce((acc, num) => acc + num, 0);
      this.router.navigateByUrl("cart");
    }

    clickOnInventory() {
      this.router.navigateByUrl("inventory");
      }

}
