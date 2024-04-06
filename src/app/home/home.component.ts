import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(
    private router: Router,
    private http: HttpClient) {}

    categories: Category[] = [];


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
