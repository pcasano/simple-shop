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
    public dataService: DataService,
    private http: HttpClient) {}  

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
      this.router.navigateByUrl("trousers");
    }
    onGoToShirts() {
      this.router.navigateByUrl("shirts");
    }
    onGoToHelp() {
      this.router.navigateByUrl("help");
      }
    onGoToShoes() {
      this.router.navigateByUrl("shoes");
    }


    ngOnInit(): void {
      this.http.get<any>('../assets/items.json').subscribe(res => {
        this.dataService.responseData = res;
      }
        );

    }

}
