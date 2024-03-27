import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-trousers-page',
  templateUrl: './trousers-page.component.html',
  styleUrl: './trousers-page.component.css'
})
export class TrousersPageComponent implements OnInit{


  constructor(
    private router: Router,
    private itemService: ItemService,
    private dataService: DataService) {}

  trouserModelCounter_1: number = 0;
  trouserModelCounter_2: number = 0;
  trouserModelCounter_3: number = 0;

  trouserSize_1 = "";
  trouserSize_2 = "";
  trouserSize_3 = "";

  firstTypeTrouser: any;
  secondTypeTrouser: any;
  thirdTypeTrouser: any;

  ngOnInit(): void {
    console.log("from TrousersPageComponent");
    this.firstTypeTrouser = this.dataService.getItemGivenTypeAndModel("trouser", "first_type");
    this.secondTypeTrouser = this.dataService.getItemGivenTypeAndModel("trouser", "second_type");
    this.thirdTypeTrouser = this.dataService.getItemGivenTypeAndModel("trouser", "third_type");
  }

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
    this.itemService.totalCartItems = this.itemService.consolidateItem(this.itemService.totalCartItems);
    this.itemService.trousers = [];
  }

  onEmptyCart() {
    this.itemService.totalCartItems = [];
    this.trouserModelCounter_1 = 0;
    this.trouserModelCounter_2 = 0;
    this.trouserModelCounter_3 = 0;
    }

}
