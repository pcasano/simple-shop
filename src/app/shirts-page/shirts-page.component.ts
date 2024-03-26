import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shirts-page',
  templateUrl: './shirts-page.component.html',
  styleUrl: './shirts-page.component.css'
})
export class ShirtsPageComponent {
  
  constructor(
    private router: Router,
    private itemService: ItemService,
    private dataService: DataService) {}

  shirtModelCounter_1: number = 0;
  shirtModelCounter_2: number = 0;
  shirtModelCounter_3: number = 0;

  shirtSize_1 = "";
  shirtSize_2 = "";
  shirtSize_3 = "";

  firstTypeShirt: any;
  secondTypeShirt: any;
  thirdTypeShirt: any;

  ngOnInit(): void {
    this.firstTypeShirt = this.dataService.getItemGivenTypeAndModel("shirt", "first_type");
    this.secondTypeShirt = this.dataService.getItemGivenTypeAndModel("shirt", "second_type");
    this.thirdTypeShirt = this.dataService.getItemGivenTypeAndModel("shirt", "third_type");
  }

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
      size: this.shirtSize_1,
      image: "../assets/shirts/shirt_1.jpg"
    }
    let shirt_2 = {
      type: "shirt",
      model: "second_type",
      number: this.shirtModelCounter_2,
      price: 20,
      size: this.shirtSize_2,
      image: "../assets/shirts/shirt_2.jpg"
    }
    let shirt_3 = {
      type: "shirt",
      model: "third_type",
      number: this.shirtModelCounter_3,
      price: 65,
      size: this.shirtSize_3,
      image: "../assets/shirts/shirt_3.jpg"
    }

    if(shirt_1.number > 0) {
      this.itemService.shirts.push(shirt_1);
    } 
    if (shirt_2.number > 0) {
      this.itemService.shirts.push(shirt_2);
    }
    if (shirt_3.number > 0) {
      this.itemService.shirts.push(shirt_3);
    }

    this.shirtModelCounter_1 = 0;
    this.shirtModelCounter_2 = 0;
    this.shirtModelCounter_3 = 0;

    this.itemService.shirts.forEach(shirt => this.itemService.totalCartItems.push(shirt));
    this.itemService.totalCartItems = this.itemService.consolidateItem(this.itemService.totalCartItems);
    this.itemService.shirts = [];
  }

  onEmptyCart() {
    this.itemService.totalCartItems = [];
    this.shirtModelCounter_1 = 0;
    this.shirtModelCounter_2 = 0;
    this.shirtModelCounter_3 = 0;
    }
}