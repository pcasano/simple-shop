import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item';

@Component({
  selector: 'app-shirts-page',
  templateUrl: './shirts-page.component.html',
  styleUrl: './shirts-page.component.css'
})
export class ShirtsPageComponent implements OnInit{
  
  constructor(
    private router: Router,
    private itemService: ItemService,
    private http: HttpClient) { }

  shirtsResponse: any;
  shirtSizesAndNumbers: shirtSizeAndNumber[] = [];
  shirtsForTheCart: Item[] = [];

  ngOnInit(): void {
    this.http.get<any>('../assets/items-data/shirts.json').subscribe(
      (res) => {
        this.shirtsResponse = res;
        console.log(this.shirtsResponse);
        this.shirtsResponse.models.forEach((shirt: any) => {
          this.shirtSizesAndNumbers.push({
            model: shirt.model,
            size: "",
            number: 0
          });
        })
      },
      (error) => console.error('Error fetching data:', error)
    );
  }

  increaseCounter(shirtModel: string) {
    const selectedShirt = this.getShirtGivenModel(shirtModel);
      selectedShirt.number += 1;
  }

  decreaseCounter(shirtModel: string) {
    const selectedShoe = this.getShirtGivenModel(shirtModel);
      if(selectedShoe.number > 0) {
        selectedShoe.number -= 1;
      }  
  }

  getShirtCounter(shirtModel: string): number {
    const selectedShirt = this.getShirtGivenModel(shirtModel);
      return selectedShirt.number;
  }

  getShirtSizeGivenModel(shirtModel: string): string {
    const selectedShirt = this.getShirtGivenModel(shirtModel);
      return selectedShirt.size;
  }

  getShirtGivenModel(shirtModel: string): any {
    const selectedShirt = this.shirtSizesAndNumbers.find(shoe => shoe.model === shirtModel);
    if(selectedShirt) {
        return selectedShirt;
      } else {
        throw new Error(`Shoe model ${shirtModel} not found`);
      }
  }

  onAddToCart() {
    this.shirtsResponse.models.forEach((shirt: any) => {     
      if(this.getShirtCounter(shirt.model) > 0) {
        this.itemService.shoes.push({
          type: "shirt",
          model: shirt.model,
          number: this.getShirtCounter(shirt.model),
          image: shirt.image,
          price: shirt.price,
          size: this.getShirtSizeGivenModel(shirt.model)
        });
      }
    });

    this.shirtsResponse.models.forEach((shirt: any) => {
      this.getShirtGivenModel(shirt.model).number = 0;
    });

    this.itemService.shoes.forEach(shoe => this.itemService.totalCartItems.push(shoe));
    this.itemService.totalCartItems = this.itemService.consolidateItem(this.itemService.totalCartItems);
    this.itemService.shoes = [];
  }

  onEmptyCart() {
    this.itemService.totalCartItems = [];
    this.shirtsResponse.models.forEach((shirt: any) => {
      this.getShirtGivenModel(shirt.model).number = 0;
    });
    }

    onGoHome() {
      this.router.navigateByUrl("home");
    }

}

export interface shirtSizeAndNumber {
  model: string,
  size: string,
  number: number
}