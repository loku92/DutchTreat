import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'; //adds extension method to observable objects
import { Product } from "./product";
import { Order, OrderItem } from "./order";

@Injectable() // tells that this service may it's own dependecies in this case httpclientmodule
export class DataService {

    public products: Product[] = [];

    public order: Order = new Order();

    private token: string = "";

    private tokenExpiration: Date;

    constructor(private http: HttpClient) {

    }

    public loadProducts(): Observable<boolean> {
        return this.http.get("/api/products")
            .map((data: any[]) => {
                this.products = data;
                return true;
            });
    }

    public get loginRequired(): boolean {
        return this.token.length === 0 || this.tokenExpiration > new Date();
    }

    public AddToOrder(product: Product) {
        let item: OrderItem = this.order.items.find(i => i.productId == product.id);

        if (item) {
            item.quantity++;
        } else {
            item = new OrderItem();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productArtId = product.artId;
            item.productCategory = product.category;
            item.productSize = product.size;
            item.productTitle = product.title;
            item.unitPrice = product.price;
            item.quantity = 1;

            this.order.items.push(item);
        }
    }
}