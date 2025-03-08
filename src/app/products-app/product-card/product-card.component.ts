import { Component, input, output } from '@angular/core';
import { Product } from '../../types/product';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [NgClass, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  newProduct = input.required<Product>();
  productId = input.required<number>();
  productAddedToCart = output<number>();

  handleAddToCart(event: Event) {
    event.stopPropagation();
    this.productAddedToCart.emit(this.productId());
  }
}
