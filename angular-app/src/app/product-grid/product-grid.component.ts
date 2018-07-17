import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  productList: Product[];

  constructor() {
    this.productList = [
      {id: 1, name: 'Best Shirt Ever', price: 200, ratingScore: 3.5, ratingCount: 30, imagePath: 'NRIBH-26011-300x300.jpg', message: ''},
      {id: 2, name: 'Next Best Shirt', price: 199, ratingScore: 3.0, ratingCount: 28, imagePath: 'NRIBH-26011-300x300.jpg', message: ''},
      {id: 3, name: 'Best Shirt Ever', price: 198, ratingScore: 2.5, ratingCount: 26, imagePath: 'NRIBH-26011-300x300.jpg', message: ''},
      {id: 4, name: 'Next Best Shirt', price: 197, ratingScore: 2.0, ratingCount: 24, imagePath: 'NRIBH-26011-300x300.jpg', message: ''},
      {id: 5, name: 'Best Shirt Ever', price: 196, ratingScore: 1.5, ratingCount: 22, imagePath: 'NRIBH-26011-300x300.jpg', message: ''},
      {id: 6, name: 'Next Best Shirt', price: 195, ratingScore: 1.0, ratingCount: 20, imagePath: 'NRIBH-26011-300x300.jpg', message: ''},
      {id: 7, name: 'Best Shirt Ever', price: 194, ratingScore: 0.5, ratingCount: 18, imagePath: 'NRIBH-26011-300x300.jpg', message: ''},
      {id: 8, name: 'Next Best Shirt', price: 193, ratingScore: 0.0, ratingCount: 16, imagePath: 'NRIBH-26011-300x300.jpg', message: ''},
      {id: 9, name: 'Best Shirt Ever', price: 192, ratingScore: 4.5, ratingCount: 14, imagePath: 'NRIBH-26011-300x300.jpg', message: ''},
      {id: 10, name: 'Next Best Shirt', price: 191, ratingScore: 4.0, ratingCount: 12, imagePath: 'NRIBH-26011-300x300.jpg', message: ''},
      {id: 11, name: 'Best Shirt Ever', price: 190, ratingScore: 3.5, ratingCount: 10, imagePath: 'NRIBH-26011-300x300.jpg', message: ''},
      {id: 12, name: 'Next Best Shirt', price: 189, ratingScore: 3.2, ratingCount: 8, imagePath: 'NRIBH-26011-300x300.jpg', message: ''}
    ];
  }

  ngOnInit() {
  }

}
