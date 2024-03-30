import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from './item.service';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { TypeWithModels } from './TypeWithModels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  title = 'simple-shop';
  jsonData: any;

  shoe: any;

  constructor(
    private router: Router,
    public itemService: ItemService,
    public dataService: DataService) {}  

    clickOnCart() {
      this.itemService.cartTotalPrice = this.itemService.totalCartItems.map(order => order.price * order.number).reduce((acc, num) => acc + num, 0);
      this.router.navigateByUrl("cart");
    }

    clickOnInventory() {
      this.router.navigateByUrl("inventory");
      }

    clickOnLogo() {
      this.router.navigateByUrl("home");
    }

    onGoToTrousers() {
      this.itemService.itemType = "trouser";
      this.router.navigateByUrl("products");

    }
    
    onGoToShirts() {
      this.itemService.itemType = "shirt";
      this.router.navigateByUrl("products");
    }

    onGoToHelp() {
      this.router.navigateByUrl("help");
    }

    onGoToShoes() {
      this.itemService.itemType = "shoe";
      this.router.navigateByUrl("products");
    }


    ngOnInit(): void {
      console.log("from AppComponent");
      this.dataService.fetchData().subscribe(
        (res) => {
        this.dataService.responseData = res;
      },
      (error) => console.error('Error fetching data:', error)
        );

    }

}
