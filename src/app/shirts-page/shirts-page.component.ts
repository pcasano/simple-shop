import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { Item } from '../item';

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

  onSelectShirtSize_1(value: string) {
    this.shirtSize_1 = value;
  }

  onSelectShirtSize_2(value: string) {
    this.shirtSize_2 = value;
  }

  onSelectShirtSize_3(value: string) {
    this.shirtSize_3 = value;
  }

  onGoHome() {
    this.router.navigateByUrl("home");
  }

  onAddToCart() {
    let shirt_1 = {
      type: "shirt",
      model: "first_type",
      number: this.shirtModelCounter_1,
      price: 75,
      size: this.shirtSize_1
    }
    let shirt_2 = {
      type: "shirt",
      model: "second_type",
      number: this.shirtModelCounter_2,
      price: 20,
      size: this.shirtSize_2
    }
    let shirt_3 = {
      type: "shirt",
      model: "third_type",
      number: this.shirtModelCounter_3,
      price: 65,
      size: this.shirtSize_3
    }

    if(shirt_1.number > 0) {
      this.itemService.shirts.push(shirt_1);
      this.itemService.totalCartItems.push(shirt_1);
    } 
    if (shirt_2.number > 0) {
      this.itemService.shirts.push(shirt_2);
      this.itemService.totalCartItems.push(shirt_2);
    }
    if (shirt_3.number > 0) {
      this.itemService.shirts.push(shirt_3);
      this.itemService.totalCartItems.push(shirt_3);
    }

    this.itemService.shirtInCart1S = this.getTotalShirtGivenRelativeShirtAndSize(shirt_1, "S");
    this.itemService.shirtInCart1M = this.getTotalShirtGivenRelativeShirtAndSize(shirt_1, "M");
    this.itemService.shirtInCart1L = this.getTotalShirtGivenRelativeShirtAndSize(shirt_1, "L");

    this.itemService.shirtInCart2S = this.getTotalShirtGivenRelativeShirtAndSize(shirt_2, "S");
    this.itemService.shirtInCart2M = this.getTotalShirtGivenRelativeShirtAndSize(shirt_2, "M");
    this.itemService.shirtInCart2L = this.getTotalShirtGivenRelativeShirtAndSize(shirt_2, "L");

    this.itemService.shirtInCart3S = this.getTotalShirtGivenRelativeShirtAndSize(shirt_3, "S");
    this.itemService.shirtInCart3M = this.getTotalShirtGivenRelativeShirtAndSize(shirt_3, "M");
    this.itemService.shirtInCart3L = this.getTotalShirtGivenRelativeShirtAndSize(shirt_3, "L");

    this.shirtModelCounter_1 = 0;
    this.shirtModelCounter_2 = 0;
    this.shirtModelCounter_3 = 0;
  }

  private getTotalShirtGivenRelativeShirtAndSize(relativeShirt: Item, size: string): Item {
    let shirts = this.itemService.totalCartItems.filter(shirt => shirt.type=="shirt" && shirt.model==relativeShirt.model && shirt.size==size).map(shirt => shirt.number);
    let number =  shirts.reduce((acc, num) => acc + num, 0);
    return {
      type: "shirt",
      model: relativeShirt.model,
      number: number,
      price: relativeShirt.price,
      size: size
    }
  }

  onEmptyCart() {
    this.itemService.totalCartItems = [];
    this.shirtModelCounter_1 = 0;
    this.shirtModelCounter_2 = 0;
    this.shirtModelCounter_3 = 0;

    this.itemService.shoeInCart1S.number = 0;
    this.itemService.shoeInCart2S.number = 0;
    this.itemService.shoeInCart3S.number = 0;
    this.itemService.shoeInCart1M.number = 0;
    this.itemService.shoeInCart2M.number = 0;
    this.itemService.shoeInCart3M.number = 0;
    this.itemService.shoeInCart1L.number = 0;
    this.itemService.shoeInCart2L.number = 0;
    this.itemService.shoeInCart3L.number = 0;

    this.itemService.shirtInCart1S.number = 0;
    this.itemService.shirtInCart2S.number = 0;
    this.itemService.shirtInCart3S.number = 0;
    this.itemService.shirtInCart1M.number = 0;
    this.itemService.shirtInCart2M.number = 0;
    this.itemService.shirtInCart3M.number = 0;
    this.itemService.shirtInCart1L.number = 0;
    this.itemService.shirtInCart2L.number = 0;
    this.itemService.shirtInCart3L.number = 0;
    }


}