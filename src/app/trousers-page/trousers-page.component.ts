import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-trousers-page',
  templateUrl: './trousers-page.component.html',
  styleUrl: './trousers-page.component.css'
})
export class TrousersPageComponent {


  constructor(
    private router: Router,
    private itemService: ItemService) {}

  trouserModelCounter_1: number = 0;
  trouserModelCounter_2: number = 0;
  trouserModelCounter_3: number = 0;

  trouserSize_1 = "";
  trouserSize_2 = "";
  trouserSize_3 = "";

  increaseTrouserModel1() {
    this.trouserModelCounter_1++;
  }

  decreaseTrouserModel1() {
    if(this.trouserModelCounter_1 > 0) {
      this.trouserModelCounter_1--;
    }    
  }

  increaseTrouserModel2() {
    this.trouserModelCounter_2++;
  }

  decreaseTrouserModel2() {
    if(this.trouserModelCounter_2 > 0) {
      this.trouserModelCounter_2--;
    }    
  }

  increaseTrouserModel3() {
    this.trouserModelCounter_3++;
  }

  decreaseTrouserModel3() {
    if(this.trouserModelCounter_3 > 0) {
      this.trouserModelCounter_3--;
    }    
  }

  onGoHome() {
    this.router.navigateByUrl("home");
  }

  onAddToCart() {
    let trouser_1 = {
      type: "trouser",
      model: "first_type",
      number: this.trouserModelCounter_1,
      price: 90,
      size: this.trouserSize_1,
      image: "../assets/trousers/trousers_1.jpg"
    }
    let trouser_2 = {
      type: "trouser",
      model: "second_type",
      number: this.trouserModelCounter_2,
      price: 115,
      size: this.trouserSize_2,
      image: "../assets/trousers/trousers_2.jpg"
    }
    let trouser_3 = {
      type: "trouser",
      model: "third_type",
      number: this.trouserModelCounter_3,
      price: 120,
      size: this.trouserSize_3,
      image: "../assets/trousers/trousers_3.jpg"
    }

    if(trouser_1.number > 0) {
      this.itemService.trousers.push(trouser_1);
      this.itemService.totalCartItems.push(trouser_1);
    } 
    if (trouser_2.number > 0) {
      this.itemService.trousers.push(trouser_2);
    }
    if (trouser_3.number > 0) {
      this.itemService.trousers.push(trouser_3);
    }

    this.trouserModelCounter_1 = 0;
    this.trouserModelCounter_2 = 0;
    this.trouserModelCounter_3 = 0;

    this.itemService.trousers.forEach(trouser => this.itemService.totalCartItems.push(trouser));
    this.itemService.totalCartItems = this.consolidateTrousers(this.itemService.totalCartItems);
    this.itemService.trousers = [];
  }

  consolidateTrousers(items: Item[]): Item[] {
    const consolidated: { [key: string]: Item } = {};

    items.forEach(item => {
        const key = `${item.model}_${item.size}`;
        if (consolidated[key]) {
            consolidated[key].number += item.number;
        } else {
            consolidated[key] = { ...item };
        }
    });

    return Object.values(consolidated);
}

  onEmptyCart() {
    this.itemService.totalCartItems = [];
    this.trouserModelCounter_1 = 0;
    this.trouserModelCounter_2 = 0;
    this.trouserModelCounter_3 = 0;
    }

}
