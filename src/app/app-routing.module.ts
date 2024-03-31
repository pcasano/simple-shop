import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SupportFormularComponent } from './support-formular/support-formular.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    // { path: 'shoes', component: ShoesPageComponent },
    // { path: 'shirts', component: ShirtsPageComponent },
    // { path: 'trousers', component: TrousersPageComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'inventory', component: InventoryComponent },
    { path: 'cart', component: CartComponent },
    { path: 'products/:type', component: ProductsComponent },
    { path: 'help', component: SupportFormularComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
