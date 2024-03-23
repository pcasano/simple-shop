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
      this.itemService.totalCartItems.forEach(item => this.itemService.sentOrders.push(this.getItem(item)));
    }

    
    this.itemService.inventoryTotalPrice =  this.itemService.sentOrders.map(order => order.totalPrice).reduce((acc, num) => acc + num, 0);
    
    this.onEmptyCart();
    this.router.navigateByUrl("inventory");
    console.log(this.itemService.sentOrders);
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
  }

}
