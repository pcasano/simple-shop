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

    categories: Category[] = [];

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

    onGoToHelp() {
      this.router.navigateByUrl("help");
    }

    ngOnInit(): void {
        this.http.get<any>(`../assets/serverData/home.json`).subscribe(
          {
            next: (res) => {
              res.forEach((category: any) => this.categories.push({
                type: category.type,
                categoryName: category.categoryName,
                image: category.image
              }));
            console.log(this.categories);
            },
            error: (error) => console.error('Error fetching data:', error)
          }
        )
      }

    navigateToProductGivenType(type: string) {
      this.router.navigate(["/products", type]);
    }
}

interface Category {
  type: string,
  categoryName: string,
  image: string
}