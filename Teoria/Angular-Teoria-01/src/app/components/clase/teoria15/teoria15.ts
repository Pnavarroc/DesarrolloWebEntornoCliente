import { Component, signal } from '@angular/core';
import { ProductDetailComponent } from '../../web/product-detail-component/product-detail-component';

@Component({
  imports: [ProductDetailComponent],
  selector: 'app-teoria15',
  styleUrl: './teoria15.css',
  templateUrl: './teoria15.html',
})
export class Teoria15 {
  protected isVisible = signal<boolean>(false);

  constructor() {

    setTimeout(()=>{
      this.isVisible.set(true);
    }, 1000)

  }
}
