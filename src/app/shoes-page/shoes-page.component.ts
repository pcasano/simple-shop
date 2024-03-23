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
      size: this.shoeSize_1,
      image: "../assets/shoes/shoe_1.jpg" 
    }
    let shoe_2 = {
      type: "shoe",
      model: "second_type",
      number: this.shoeModelCounter_2,
      price: 60,
      size: this.shoeSize_2,
      image: "../assets/shoes/shoe_2.jpg"
    }
    let shoe_3 = {
      type: "shoe",
      model: "third_type",
      number: this.shoeModelCounter_3,
      price: 70,
      size: this.shoeSize_3,
      image: "../assets/shoes/shoe_3.jpg"
    }

    if(shoe_1.number > 0) {
      this.itemService.shoes.push(shoe_1);
    } 
    if (shoe_2.number > 0) {
      this.itemService.shoes.push(shoe_2);
    }
    if (shoe_3.number > 0) {
      this.itemService.shoes.push(shoe_3);
    }

    this.shoeModelCounter_1 = 0;
    this.shoeModelCounter_2 = 0;
    this.shoeModelCounter_3 = 0;

    this.itemService.shoes.forEach(shoe => this.itemService.totalCartItems.push(shoe));
    this.itemService.totalCartItems = this.consolidateShoes(this.itemService.totalCartItems);
    this.itemService.shoes = [];
  }

  consolidateShoes(shoes: Item[]): Item[] {
    const consolidated: { [key: string]: Item } = {};

    shoes.forEach(shoe => {
        const key = `${shoe.model}_${shoe.size}`;
        if (consolidated[key]) {
            consolidated[key].number += shoe.number;
        } else {
            consolidated[key] = { ...shoe };
        }
    });

    return Object.values(consolidated);
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
