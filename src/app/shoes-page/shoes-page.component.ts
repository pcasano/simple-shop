import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item';


@Component({
  selector: 'app-shoes-page',
  templateUrl: './shoes-page.component.html',
  styleUrl: './shoes-page.component.css'
})
export class ShoesPageComponent {

  constructor(
    private router: Router,
    private itemService: ItemService) {}

  shoeModelCounter_1: number = 0;
  shoeModelCounter_2: number = 0;
  shoeModelCounter_3: number = 0;

  increaseShoeModel1() {
    this.shoeModelCounter_1++;
  }

  decreaseShoeModel1() {
    if(this.shoeModelCounter_1 > 0) {
      this.shoeModelCounter_1--;
    }    
  }

  increaseShoeModel2() {
    this.shoeModelCounter_2++;
  }

  decreaseShoeModel2() {
    if(this.shoeModelCounter_2 > 0) {
      this.shoeModelCounter_2--;
    }    
  }

  increaseShoeModel3() {
    this.shoeModelCounter_3++;
  }

  decreaseShoeModel3() {
    if(this.shoeModelCounter_3 > 0) {
      this.shoeModelCounter_3--;
    }    
  }

  onGoBack() {
    this.router.navigateByUrl("home");
  }

  onAddToCart() {
    let shoe_1: Item = {
      type: "shoe",
      model: "first_type",
      number: this.shoeModelCounter_1,
      price: 50,
      size: "XL"
    }
    let shoe_2 = {
      type: "shoe",
      model: "second_type",
      number: this.shoeModelCounter_2,
      price: 60,
      size: "XL"
    }
    let shoe_3 = {
      type: "shoe",
      model: "third_type",
      number: this.shoeModelCounter_3,
      price: 70,
      size: "XL"
    }
    this.itemService.shoes.push(shoe_1, shoe_2, shoe_3)
    this.itemService.totalItems.push(shoe_1, shoe_2, shoe_3);


    this.shoeModelCounter_1 = 0;
    this.shoeModelCounter_2 = 0;
    this.shoeModelCounter_3 = 0;
  }

  onEmptyCart() {
    this.itemService.totalItems = [];
    this.shoeModelCounter_1 = 0;
    this.shoeModelCounter_2 = 0;
    this.shoeModelCounter_3 = 0;
    }
}
