import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProductList } from './shop/productlist.component';
import { DataService } from './shared/dataService';
import { Cart } from './shop/cart.component';

import { RouterModule } from "@angular/router"
import { Shop } from './shop/shop.component';
import { Checkout } from './checkout/checkout.component';
import { Login } from './login/login.component';

import { FormsModule } from "@angular/forms"

let routes = [
    { path: "", component: Shop },
    { path: "checkout", component: Checkout },
    { path: "login", component: Login }
];

@NgModule({
    declarations: [
        AppComponent,
        ProductList,
        Cart,
        Shop,
        Checkout,
        Login
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes, {
            useHash: true, //routing after hash sign in url
            enableTracing: false //for debugging in the console the routes 
        })
    ],
    providers: [//injection system
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
