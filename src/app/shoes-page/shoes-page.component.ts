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

  onGoHome() {
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

    this.itemService.shoeInCart1S = this.getTotalShoeGivenRelativeShoeAndSize(shoe_1, "S");
    this.itemService.shoeInCart1M = this.getTotalShoeGivenRelativeShoeAndSize(shoe_1, "M");
    this.itemService.shoeInCart1L = this.getTotalShoeGivenRelativeShoeAndSize(shoe_1, "L");

    this.itemService.shoeInCart2S = this.getTotalShoeGivenRelativeShoeAndSize(shoe_2, "S");
    this.itemService.shoeInCart2M = this.getTotalShoeGivenRelativeShoeAndSize(shoe_2, "M");
    this.itemService.shoeInCart2L = this.getTotalShoeGivenRelativeShoeAndSize(shoe_2, "L");

    this.itemService.shoeInCart3S = this.getTotalShoeGivenRelativeShoeAndSize(shoe_3, "S");
    this.itemService.shoeInCart3M = this.getTotalShoeGivenRelativeShoeAndSize(shoe_3, "M");
    this.itemService.shoeInCart3L = this.getTotalShoeGivenRelativeShoeAndSize(shoe_3, "L");

    this.shoeModelCounter_1 = 0;
    this.shoeModelCounter_2 = 0;
    this.shoeModelCounter_3 = 0;

  }

  private getTotalShoeGivenRelativeShoeAndSize(relativeShoe: Item, size: string): Item {
    let shoes = this.itemService.totalCartItems.filter(shoe => shoe.type=="shoe" && shoe.model==relativeShoe.model && shoe.size==size).map(shoe => shoe.number);
    let number =  shoes.reduce((acc, num) => acc + num, 0);
    return {
      type: "shoe",
      model: relativeShoe.model,
      number: number,
      price: relativeShoe.price,
      size: size
    }
  }

  onEmptyCart() {
    this.itemService.totalCartItems = [];
    this.shoeModelCounter_1 = 0;
    this.shoeModelCounter_2 = 0;
    this.shoeModelCounter_3 = 0;

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

    this.itemService.trouserInCart1S.number = 0;
    this.itemService.trouserInCart2S.number = 0;
    this.itemService.trouserInCart3S.number = 0;
    this.itemService.trouserInCart1M.number = 0;
    this.itemService.trouserInCart2M.number = 0;
    this.itemService.trouserInCart3M.number = 0;
    this.itemService.trouserInCart1L.number = 0;
    this.itemService.trouserInCart2L.number = 0;
    this.itemService.trouserInCart3L.number = 0;
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
