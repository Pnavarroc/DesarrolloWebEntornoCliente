import { Component, EventEmitter, Input, model, Output, WritableSignal } from '@angular/core';
import { Teoria10Hijo } from '../teoria10-hijo/teoria10-hijo';
import {
  QuantityStepperParentComponent
} from '../../web/quantity-stepper-parent-component/quantity-stepper-parent-component';

@Component({
  imports: [Teoria10Hijo, QuantityStepperParentComponent],
  selector: 'app-teoria10',
  styleUrl: './teoria10.css',
  templateUrl: './teoria10.html',
})
export class Teoria10 {
  protected updateModernQuantity(event: number) {
    console.log(event);
  }

  protected updateQuantity(event: number) {
    console.log(event);
  }
}
