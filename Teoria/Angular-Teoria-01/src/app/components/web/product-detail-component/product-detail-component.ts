import { Component, computed, inject, input, signal } from '@angular/core';
import { ProductService } from '../../../services/product-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-detail-component',
  styleUrl: './product-detail-component.css',
  templateUrl: './product-detail-component.html',
})
export class ProductDetailComponent {

  productId = input.required<number>();

  private readonly productService: ProductService = inject(ProductService);
  product =
    toSignal(this.productService.getProductById(1),
      {
        initialValue: undefined,
      }
    );

  readonly isLoading = computed(() => this.product === undefined);

  readonly hasError = computed(() => this.product === null);

  readonly productOk = computed(() => {
    const prod = this.product();
    return prod !== undefined && prod !== null ? prod : null;
  });

  /*testError() {
    this.productId.set(999);
  }*/
}
