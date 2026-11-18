import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Product } from '../../../common/interfaces/interface';
import { PRODUCTS_MOCK } from '../../../common/mocks/product.mosk';
import { ProductCardComponent } from '../product-card-component/product-card-component';
import { CurrencyPipe } from '@angular/common';
import { ProductFilterComponent } from '../product-filter-component/product-filter-component';
import { CartService } from '../../../services/cart-service';
import { ProductService } from '../../../services/product-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductDetailComponent } from '../product-detail-component/product-detail-component';

@Component({
  imports: [ProductCardComponent, CurrencyPipe, ProductFilterComponent, ProductDetailComponent],
  selector: 'app-catalog-component',
  styleUrl: './catalog-component.css',
  templateUrl: './catalog-component.html',
})
export class CatalogComponent {

  private readonly productService = inject(ProductService);

  private readonly cartService = inject(CartService);

  products = toSignal(this.productService.getProducts());

  lastViewedProduct = signal<Product | null>(null);
  selectedCount = signal<number>(0);

  isLoading = computed(() => this.products() === undefined);

  searchTerm = signal('');
  categoryTerm = signal('All');

  reduceStock(selectedProduct: { product: Product; quantity: number }) {
    this.selectedCount.update((count) => count + selectedProduct.quantity);
    /*this.products.update((currentProducts) =>
      currentProducts.map((prod) => {
        if (prod.id === selectedProduct.product.id && prod.stock > 0 && prod.stock > selectedProduct.quantity) {
          return { ...prod, stock: prod.stock - selectedProduct.quantity };
        }
        return prod;
      }),
    );*/
    this.cartService.addProduct(selectedProduct);
  }

  protected onProductDetails(product: Product) {
    this.lastViewedProduct.set(product);
  }

  filteredProducts = computed(() => {
    const query = this.searchTerm().toLowerCase().trim();
    const cat = this.categoryTerm();
    const result = this.products() ?? [];

    return result.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(query);
      const matchesCategory = cat === 'All' || p.category === cat;

      return matchesSearch && matchesCategory;
    });
  });
}
