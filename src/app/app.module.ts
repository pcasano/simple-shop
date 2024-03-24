import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoesPageComponent } from './shoes-page/shoes-page.component';
import { ShirtsPageComponent } from './shirts-page/shirts-page.component';
import { TrousersPageComponent } from './trousers-page/trousers-page.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ItemService } from './item.service';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { SupportFormularComponent } from './support-formular/support-formular.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    ShoesPageComponent,
    ShirtsPageComponent,
    TrousersPageComponent,
    CartComponent,
    HomeComponent,
    InventoryComponent,
    SupportFormularComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule,
    ReactiveFormsModule
  ],
  providers: [
    ItemService, 
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
