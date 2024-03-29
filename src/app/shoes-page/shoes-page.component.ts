import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-shoes-page',
  templateUrl: './shoes-page.component.html',
  styleUrl: './shoes-page.component.css'
})
export class ShoesPageComponent implements OnInit {

  constructor(
    private router: Router,
    private itemService: ItemService,
    private dataService: DataService,
    private http: HttpClient) { }

  shoeModelCounter_1: number = 0;
  shoeModelCounter_2: number = 0;
  shoeModelCounter_3: number = 0;


  firstTypeShoe: any;
  secondTypeShoe: any;
  thirdTypeShoe: any;


  shoesResponse: any;
  shoeSizesAndNumbers: shoeSizeAndNumber[] = [];
  shoesForTheCart: Item[] = [];


  ngOnInit(): void {
    this.http.get<any>('../assets/items-data/shoes.json').subscribe(
      (res) => {
        this.shoesResponse = res;
        console.log(this.shoesResponse);
        this.shoesResponse.models.forEach((shoe: any) => {
          this.shoeSizesAndNumbers.push({
            model: shoe.model,
            size: "",
            number: 0
          });
        })
      },
      (error) => console.error('Error fetching data:', error)
    );


    console.log("from ShoePageComponent");
    this.firstTypeShoe = this.dataService.getItemGivenTypeAndModel("shoe", "first_type");
    this.secondTypeShoe = this.dataService.getItemGivenTypeAndModel("shoe", "second_type");
    this.thirdTypeShoe = this.dataService.getItemGivenTypeAndModel("shoe", "third_type");
  }


  increaseCounter(shoeModel: string) {
    const selectedShoe = this.shoeSizesAndNumbers.find(shoe => shoe.model === shoeModel);
    if(selectedShoe) {
      selectedShoe.number += 1;
    } else {
      throw new Error(`Shoe model ${shoeModel} not found`);
    }
  }

  decreaseCounter(shoeModel: string) {
    const selectedShoe = this.shoeSizesAndNumbers.find(shoe => shoe.model === shoeModel);
    if(selectedShoe) {
      if(selectedShoe.number > 0) {
        selectedShoe.number -= 1;
      }   
    } else {
      throw new Error(`Shoe model ${shoeModel} not found`);
    }
  }

  getShoeCounter(shoeModel: string): number {
    const selectedShoe = this.shoeSizesAndNumbers.find(shoe => shoe.model === shoeModel);
    if(selectedShoe) {
        return selectedShoe.number;
      } else {
        return 0;
      }
  }

  getShoeSizeGivenModel(shoeModel: string): string {
    const selectedShoe = this.shoeSizesAndNumbers.find(shoe => shoe.model === shoeModel);
    if(selectedShoe) {
        return selectedShoe.size;
      } else {
        return "N/A";
      }
  }

  getShoeGivenModel(shoeModel: string): any {
    const selectedShoe = this.shoeSizesAndNumbers.find(shoe => shoe.model === shoeModel);
    if(selectedShoe) {
        return selectedShoe;
      } else {
        throw new Error(`Shoe model ${shoeModel} not found`);
      }
  }


  onGoHome() {
    this.router.navigateByUrl("home");
  }

  onAddToCart() {
    this.shoesResponse.models.forEach((shoe: any) => {     
      if(this.getShoeCounter(shoe.model) > 0) {
        this.itemService.shoes.push({
          type: "shoe",
          model: shoe.model,
          number: this.getShoeCounter(shoe.model),
          image: shoe.image,
          price: shoe.price,
          size: this.getShoeSizeGivenModel(shoe.model)
        });
      }
    });

    this.shoesResponse.models.forEach((shoe: any) => {
      this.getShoeGivenModel(shoe.model).number = 0;
    });

    this.itemService.shoes.forEach(shoe => this.itemService.totalCartItems.push(shoe));
    this.itemService.totalCartItems = this.itemService.consolidateItem(this.itemService.totalCartItems);
    this.itemService.shoes = [];
  }

  onEmptyCart() {
    this.itemService.totalCartItems = [];
    this.shoesResponse.models.forEach((shoe: any) => {
      this.getShoeGivenModel(shoe.model).number = 0;
    });
  }
}

export interface shoeSizeAndNumber {
  model: string,
  size: string,
  number: number
}