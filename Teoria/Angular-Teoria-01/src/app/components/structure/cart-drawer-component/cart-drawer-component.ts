import { Component, input, output, inject } from '@angular/core';
import { CartService } from '../../../services/cart-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart-drawer-component',
  styleUrl: './cart-drawer-component.css',
  templateUrl: './cart-drawer-component.html',
})
export class CartDrawerComponent {
  isOpen = input<boolean>(false);
  closeDrawer = output<void>();

  protected readonly cartService: CartService = inject(CartService);
  protected readonly close = close;

  protected onRemove(id: number) {
    this.cartService.removeItem(id);
  }

  protected onCheckOut() {
    alert("Compra realizada!! total: "+ this.cartService.totalPrice());
    this.cartService.clearCart();
    this.closeDrawer.emit();
  }

  protected onDecrement(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity - 1);
  }

  protected onIncrement(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity + 1);
  }
}

