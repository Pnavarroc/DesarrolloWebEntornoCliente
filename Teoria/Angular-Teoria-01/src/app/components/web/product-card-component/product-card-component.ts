import {
  Component,
  computed,
  input,
  InputSignal,
  output,
  signal,
  WritableSignal,
} from '@angular/core';
import { Product } from '../../../common/interfaces/interface';
import { CurrencyPipe } from '@angular/common';
import { QuantityStepperComponent } from '../quantity-stepper-component/quantity-stepper-component';

@Component({
  imports: [CurrencyPipe, QuantityStepperComponent],
  selector: 'app-product-card-component',
  styleUrl: './product-card-component.css',
  templateUrl: './product-card-component.html',
})
export class ProductCardComponent {
  product: InputSignal<Product> = input.required();

  //Ejercicio hecho en clase:

  stock: WritableSignal<number> = signal<number>(5);

  showAlert: WritableSignal<boolean> = signal<boolean>(false);

  isLowStock = computed(() => this.product().stock > 0 && this.product().stock < 3);

  isOoutOfStock = computed(() => this.product().stock === 0);

  addToCart = output<{product: Product, quantity: number }>();

  onAddToCart() {
    /*if(this.stock() > 0) this.stock.update(currentStock=> currentStock-1);
    if(this.stock() === 0) this.showAlert.set(true);*/
    if (!this.isOoutOfStock()) {
      this.addToCart.emit({
        product: this.product(),
        quantity: this.selectedQuantity()
      });
      this.selectedQuantity.set(1);
    }
  }

  viewDetails = output<Product>();

  selectedQuantity = signal(1);

  protected onViewDetails() {
    this.viewDetails.emit(this.product());
  }
}
