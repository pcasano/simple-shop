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
      size: this.trouserSize_1
    }
    let trouser_2 = {
      type: "trouser",
      model: "second_type",
      number: this.trouserModelCounter_2,
      price: 115,
      size: this.trouserSize_2
    }
    let trouser_3 = {
      type: "trouser",
      model: "third_type",
      number: this.trouserModelCounter_3,
      price: 120,
      size: this.trouserSize_3
    }

    if(trouser_1.number > 0) {
      this.itemService.trousers.push(trouser_1);
      this.itemService.totalCartItems.push(trouser_1);
    } 
    if (trouser_2.number > 0) {
      this.itemService.trousers.push(trouser_2);
      this.itemService.totalCartItems.push(trouser_2);
    }
    if (trouser_3.number > 0) {
      this.itemService.trousers.push(trouser_3);
      this.itemService.totalCartItems.push(trouser_3);
    }

    this.itemService.trouserInCart1S = this.getTotalTrouserGivenRelativeShoeAndSize(trouser_1, "S");
    this.itemService.trouserInCart1M = this.getTotalTrouserGivenRelativeShoeAndSize(trouser_1, "M");
    this.itemService.trouserInCart1L = this.getTotalTrouserGivenRelativeShoeAndSize(trouser_1, "L");

    this.itemService.trouserInCart2S = this.getTotalTrouserGivenRelativeShoeAndSize(trouser_2, "S");
    this.itemService.trouserInCart2M = this.getTotalTrouserGivenRelativeShoeAndSize(trouser_2, "M");
    this.itemService.trouserInCart2L = this.getTotalTrouserGivenRelativeShoeAndSize(trouser_2, "L");

    this.itemService.trouserInCart3S = this.getTotalTrouserGivenRelativeShoeAndSize(trouser_3, "S");
    this.itemService.trouserInCart3M = this.getTotalTrouserGivenRelativeShoeAndSize(trouser_3, "M");
    this.itemService.trouserInCart3L = this.getTotalTrouserGivenRelativeShoeAndSize(trouser_3, "L");

    this.trouserModelCounter_1 = 0;
    this.trouserModelCounter_2 = 0;
    this.trouserModelCounter_3 = 0;

  }

  private getTotalTrouserGivenRelativeShoeAndSize(relativeTrouser: Item, size: string): Item {
    let trousers = this.itemService.totalCartItems.filter(trouser => trouser.type=="trouser" && trouser.model==relativeTrouser.model && trouser.size==size).map(trouser => trouser.number);
    let number =  trousers.reduce((acc, num) => acc + num, 0);
    return {
      type: "trouser",
      model: relativeTrouser.model,
      number: number,
      price: relativeTrouser.price,
      size: size
    }
  }


  onEmptyCart() {
    this.itemService.totalCartItems = [];
    this.trouserModelCounter_1 = 0;
    this.trouserModelCounter_2 = 0;
    this.trouserModelCounter_3 = 0;

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

}
