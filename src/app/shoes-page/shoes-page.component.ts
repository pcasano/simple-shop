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

  shoeSize_1 = "";
  shoeSize_2 = "";
  shoeSize_3 = "";

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
    let shoe_1 = {
      type: "shoe",
      model: "first_type",
      number: this.shoeModelCounter_1,
      price: 50,
      size: this.shoeSize_1
    }
    let shoe_2 = {
      type: "shoe",
      model: "second_type",
      number: this.shoeModelCounter_2,
      price: 60,
      size: this.shoeSize_2
    }
    let shoe_3 = {
      type: "shoe",
      model: "third_type",
      number: this.shoeModelCounter_3,
      price: 70,
      size: this.shoeSize_3
    }

    if(shoe_1.number > 0) {
      this.itemService.shoes.push(shoe_1);
      this.itemService.totalCartItems.push(shoe_1);
    } 
    if (shoe_2.number > 0) {
      this.itemService.shoes.push(shoe_2);
      this.itemService.totalCartItems.push(shoe_2);
    }
    if (shoe_3.number > 0) {
      this.itemService.shoes.push(shoe_3);
      this.itemService.totalCartItems.push(shoe_3);
    }




    let shoesSInCart_1 = this.itemService.totalCartItems.filter(show => shoe_1.model=="first_type" && shoe_1.size=="S");

    this.shoeModelCounter_1 = 0;
    this.shoeModelCounter_2 = 0;
    this.shoeModelCounter_3 = 0;

    this.itemService.totalCartItems.forEach(x => console.log(console.log("shoes: " + x.model + " - " + x.size)));

    

    console.log("S Shoes_1: " + shoesSInCart_1.length);
  }

  onEmptyCart() {
    this.itemService.totalCartItems = [];
    this.shoeModelCounter_1 = 0;
    this.shoeModelCounter_2 = 0;
    this.shoeModelCounter_3 = 0;
    }

  onSelectShowSize_1(value: string) {
    this.shoeSize_1 = value;
  }

  onSelectShowSize_2(value: string) {
    this.shoeSize_2 = value;
  }

  onSelectShowSize_3(value: string) {
    this.shoeSize_3 = value;
  }
}
