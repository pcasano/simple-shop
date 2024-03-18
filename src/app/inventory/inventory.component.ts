import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

import { AgGridAngular } from 'ag-grid-angular'; // AG Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  constructor(
    public itemService: ItemService,
    private router: Router) {}

  onGoHome() {
    this.router.navigateByUrl("home");
  }

  colDefs2: ColDef[] = [
    { field: "type", filter: "agTextColumnFilter" },
    { field: "model" },
    { field: "price" },
    { field: "number" },
    { field: "totalPrice" },
    { field: "size", filter: "agTextColumnFilter"  },
    { field: "orderId", filter: "agTextColumnFilter"  },
  ];

  defaultColDef = {
    flex: 1,
    maxWidth: 180
  }

}