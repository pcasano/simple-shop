import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(
    private router: Router,
    private itemService: ItemService,
    private http: HttpClient,
    private route: ActivatedRoute) { }

  itemResponse: any;
  itemSizeAndNumber: ItemSizeAndNumber[] = [];
  itemsForTheCart: Item[] = [];

  itemType: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.itemType = params.get('type');
      this.http.get<any>(`../assets/serverData/${this.itemType}.json`).subscribe(
        {
          next: (res) => {
            this.itemResponse = res;
            this.itemResponse.models.forEach((item: any) => {
              this.itemSizeAndNumber.push({
                type: this.itemType,
                model: item.model,
                size: "",
                number: 0
              });
            })
          },
          error: (error) => console.error('Error fetching data:', error)
        }
      );
    });
  }

  getItemGivenModel(itemModel: string): any {
    const selectedItem = this.itemSizeAndNumber.find(item => item.model === itemModel);
    if (selectedItem) {
      return selectedItem;
    } else {
      throw new Error(`Item model ${itemModel} not found`);
    }
  }

  increaseCounter(itemModel: string) {
    const selectedItem = this.getItemGivenModel(itemModel);
    selectedItem.number += 1;
  }

  decreaseCounter(itemModel: string) {
    const selectedItem = this.getItemGivenModel(itemModel);
    if (selectedItem.number > 0) {
      selectedItem.number -= 1;
    }
  }

  getItemCounter(itemModel: string): number {
    const selectedItem = this.getItemGivenModel(itemModel);
    return selectedItem.number;
  }

  getItemSizeGivenModel(value: any, itemModel: string)  {
    this.getItemGivenModel(itemModel).size = (value.target as HTMLSelectElement).value;
  }

  onAddToCart() {
    this.itemResponse.models.forEach((item: any) => {
      if (this.getItemCounter(item.model) > 0) {
        this.itemService.items.push({
          type: this.itemType,
          model: item.model,
          number: this.getItemCounter(item.model),
          image: item.image,
          price: item.price,
          size: this.getItemGivenModel(item.model).size
        });
      }
    });

    this.itemResponse.models.forEach((item: any) => {
      this.getItemGivenModel(item.model).number = 0;
    });

    this.itemService.items.forEach(item => this.itemService.totalCartItems.push(item));
    this.itemService.totalCartItems = this.itemService.consolidateItem(this.itemService.totalCartItems);
    this.itemService.items = [];
  }

  onEmptyCart() {
    this.itemService.totalCartItems = [];
    this.itemResponse.models.forEach((item: any) => {
      this.getItemGivenModel(item.model).number = 0;
    });
  }

  onGoHome() {
    this.router.navigateByUrl("home");
  }
}

export interface ItemSizeAndNumber {
  type: string,
  model: string,
  size: string,
  number: number
}