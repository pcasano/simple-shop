import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shirts-page',
  templateUrl: './shirts-page.component.html',
  styleUrl: './shirts-page.component.css'
})
export class ShirtsPageComponent {
  
  constructor(
    private router: Router,
    private itemService: ItemService) {}

  shirtModelCounter_1: number = 0;
  shirtModelCounter_2: number = 0;
  shirtModelCounter_3: number = 0;

  shirtSize_1 = "";
  shirtSize_2 = "";
  shirtSize_3 = "";

  increaseShirtModel1() {
    this.shirtModelCounter_1++;
  }

  decreaseShirtModel1() {
    if(this.shirtModelCounter_1 > 0) {
      this.shirtModelCounter_1--;
    }    
  }

  increaseShirtModel2() {
    this.shirtModelCounter_2++;
  }

  decreaseShirtModel2() {
    if(this.shirtModelCounter_2 > 0) {
      this.shirtModelCounter_2--;
    }    
  }

  increaseShirtModel3() {
    this.shirtModelCounter_3++;
  }

  decreaseShirtModel3() {
    if(this.shirtModelCounter_3 > 0) {
      this.shirtModelCounter_3--;
    }    
  }

  onGoHome() {
    this.router.navigateByUrl("home");
  }

  onAddToCart() {

  }

  onEmptyCart() {

  }


}
