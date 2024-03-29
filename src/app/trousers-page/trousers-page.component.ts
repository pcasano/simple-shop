import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trousers-page',
  templateUrl: './trousers-page.component.html',
  styleUrl: './trousers-page.component.css'
})
export class TrousersPageComponent implements OnInit{

  constructor(
    private router: Router,
    private itemService: ItemService,
    private http: HttpClient) { }

    trouserResponse: any;
    trouserSizesAndNumbers: trouserSizeAndNumber[] = [];
    trouserForTheCart: Item[] = [];


  ngOnInit(): void {
    this.http.get<any>('../assets/items-data/trousers.json').subscribe(
      (res) => {
        this.trouserResponse = res;
        console.log(this.trouserResponse);
        this.trouserResponse.models.forEach((trouser: any) => {
          this.trouserSizesAndNumbers.push({
            model: trouser.model,
            size: "",
            number: 0
          });
        })
      },
      (error) => console.error('Error fetching data:', error)
    );
  }

  increaseCounter(trouserModel: string) {
    const selectedShirt = this.getTrouserGivenModel(trouserModel);
      selectedShirt.number += 1;
  }

  decreaseCounter(trouserModel: string) {
    const selectedShoe = this.getTrouserGivenModel(trouserModel);
      if(selectedShoe.number > 0) {
        selectedShoe.number -= 1;
      }  
  }

  getTrouserCounter(trouserModel: string): number {
    const selectedShirt = this.getTrouserGivenModel(trouserModel);
      return selectedShirt.number;
  }

  getTrouserSizeGivenModel(trouserModel: string): string {
    const selectedShirt = this.getTrouserGivenModel(trouserModel);
      return selectedShirt.size;
  }

  getTrouserGivenModel(trouserModel: string): any {
    const selectedShirt = this.trouserSizesAndNumbers.find(shoe => shoe.model === trouserModel);
    if(selectedShirt) {
        return selectedShirt;
      } else {
        throw new Error(`Shoe model ${trouserModel} not found`);
      }
  }

  onAddToCart() {
    this.trouserResponse.models.forEach((trouser: any) => {     
      if(this.getTrouserCounter(trouser.model) > 0) {
        this.itemService.shoes.push({
          type: "trouser",
          model: trouser.model,
          number: this.getTrouserCounter(trouser.model),
          image: trouser.image,
          price: trouser.price,
          size: this.getTrouserSizeGivenModel(trouser.model)
        });
      }
    });

    this.trouserResponse.models.forEach((trouser: any) => {
      this.getTrouserGivenModel(trouser.model).number = 0;
    });

    this.itemService.shoes.forEach(shoe => this.itemService.totalCartItems.push(shoe));
    this.itemService.totalCartItems = this.itemService.consolidateItem(this.itemService.totalCartItems);
    this.itemService.shoes = [];
  }

  onEmptyCart() {
    this.itemService.totalCartItems = [];
    this.trouserResponse.models.forEach((trouser: any) => {
      this.getTrouserGivenModel(trouser.model).number = 0;
    });
    }

    onGoHome() {
      this.router.navigateByUrl("home");
    }

}

export interface trouserSizeAndNumber {
  model: string,
  size: string,
  number: number
}