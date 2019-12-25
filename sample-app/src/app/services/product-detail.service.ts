import { Injectable } from '@angular/core';
import { IProduct } from '../model/iproduct';

@Injectable()
export class ProductDetailService {

  constructor() { }

  calculateBadge(product: IProduct): void {
    if (product.starRating >= 4) {
      product.productBadge = 'Best Seller';
    } else {
      product.productBadge = 'Unpopular Product';
    }
  }
}
