import { Component, input, model, ModelSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-quantity-stepper-component',
  styleUrl: './quantity-stepper-component.css',
  templateUrl: './quantity-stepper-component.html',
})
export class QuantityStepperComponent {
  value = model<number>(1);

  quantity = model<number>(1);

  maxStock = input(Infinity);


  decrement() {
    if (this.quantity() > 1) {
      this.quantity.update(v => v - 1);
    }
  }

  increment() {
    this.quantity.update(v => v + 1);
  }
}
