import { Component, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import products from '../../assets/products.json';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, NgClass],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  // ActivatedRoute
  // products: Array<Product> = products.products;
  // activatedRoute = inject(ActivatedRoute);
  // ngOnInit() {
  //   const params_id: string = this.activatedRoute.snapshot.params['productId'];
  //   var product = this.products.find(
  //     (product: Product) => product.id === Number(params_id)
  //   );
  // }

  //-----------------------------------------------------------

  //WithComponentInputBinding
  products: Array<Product> = products.products;
  productId = input.required<string>();
  product: Product | undefined;

  ngOnInit() {
    this.product = this.products.find(
      (product: Product) => product.id === Number(this.productId())
    );
  }
}
