import { Component, computed, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-teoria8',
  styleUrl: './teoria8.css',
  templateUrl: './teoria8.html',
})
export class Teoria8 {
  price = signal(100);
  quantity = signal(1);
  miQuantity = 1;

  subtotal = computed(() => this.price() * this.quantity());

  addPrice() {
    this.price.update((val) => val + 20);
  }
  addQuantity() {
    this.quantity.update((val) => val + 1);
    this.miQuantity ++;
  }

  constructor() {
    effect(()=>{
      console.log('Quantity', this.quantity());
    });
  }

  // EJERCICIOS


}
