import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';
import { ProductMessageComponent } from '../product-message/product-message.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
