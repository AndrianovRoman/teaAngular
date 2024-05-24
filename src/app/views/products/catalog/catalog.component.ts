import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private http: HttpClient,
              private productService: ProductService) {
  }

  products: ProductType[] = [];

  ngOnInit(): void {

    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
        console.log(this.products);
      });
  }

}
