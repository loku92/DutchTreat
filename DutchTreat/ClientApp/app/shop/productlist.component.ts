﻿import {Component} from "@angular/core"

@Component({
    selector: "product-list",
    templateUrl: "productlist.component.html",
    styleUrls: []
})
export class ProductList {
    public products = [{
            title: "First Product",
            price:19.99
        },
        {
            title: "Second Product",
            price: 2.99
        },
        {
            title: "Third Product",
            price: 12.99
        }]
}