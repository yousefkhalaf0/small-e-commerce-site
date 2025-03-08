import { Component, inject } from '@angular/core';
import { Product } from '../../types/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';
import products from '../../assets/products.json';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  products: Array<Product> = products.products;

  router = inject(Router);

  handleRedirect(id: number) {
    this.router.navigate(['/products', id]);
  }

  handleAddToCart(id: number) {
    console.log(`Product with id ${id} was added to cart`);
  }
}
