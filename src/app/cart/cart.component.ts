import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { Item } from '../item';
import { InventoryItem } from '../inventoryItem';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(
    public itemService: ItemService,
    private router: Router
    ) {}



  onSendOrder() {
    let ordersToSend: InventoryItem[]= [];

    if(this.itemService.totalCartItems.length > 0) {
      this.itemService.orderId++;
    }
    ordersToSend.push(
      this.getItem(this.itemService.shoeInCart1S),
      this.getItem(this.itemService.shoeInCart1M),
      this.getItem(this.itemService.shoeInCart1L),
      this.getItem(this.itemService.shoeInCart2S),
      this.getItem(this.itemService.shoeInCart2M),
      this.getItem(this.itemService.shoeInCart2L),
      this.getItem(this.itemService.shoeInCart3S),
      this.getItem(this.itemService.shoeInCart3M),
      this.getItem(this.itemService.shoeInCart3L),
    );

    ordersToSend.filter(item => item.number > 0).forEach(item => this.itemService.sentOrders.push(item));
    // completewith shirts and trousers
    
    this.onEmptyCart();
    this.router.navigateByUrl("inventory");

  }

  private getItem(item: Item): InventoryItem {
    return {
      type: item.type,
      model: item.model,
      price: item.price,
      number: item.number,
      totalPrice: item.price * item.number,
      size: item.size,
      orderId: this.itemService.orderId
    }

  }

  onGoHome() {
    this.router.navigateByUrl("home");
  }

  onEmptyCart() {
    this.itemService.totalCartItems = [];

    this.itemService.shoeInCart1S.number = 0;
    this.itemService.shoeInCart2S.number = 0;
    this.itemService.shoeInCart3S.number = 0;
    this.itemService.shoeInCart1M.number = 0;
    this.itemService.shoeInCart2M.number = 0;
    this.itemService.shoeInCart3M.number = 0;
    this.itemService.shoeInCart1L.number = 0;
    this.itemService.shoeInCart2L.number = 0;
    this.itemService.shoeInCart3L.number = 0;

    // completewith shirts and trousers
  }

}
