import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoesPageComponent } from './shoes-page/shoes-page.component';
import { ShirtsPageComponent } from './shirts-page/shirts-page.component';
import { TrousersPageComponent } from './trousers-page/trousers-page.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoesPageComponent,
    ShirtsPageComponent,
    TrousersPageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
