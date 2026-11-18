import { Component, OnInit } from '@angular/core';
import { CategoryType, Product } from '../../../common/interfaces/interface';

@Component({
  imports: [],
  selector: 'app-ejercicios-sesion4',
  styleUrl: './ejercicios-sesion4.css',
  templateUrl: './ejercicios-sesion4.html',
})
export class EjerciciosSesion4 implements OnInit {
  products: Product[] = [
    {
      id: 0,
      title: 'Camiseta',
      price: 5,
      stock: 10,
      description: 'Camiseta guapa',
      category: 'clothing',
      image: 'imageCamiseta.jpg',
      rating: {
        count: 1,
        rate: 5,
      },
    },
    {
      id: 1,
      title: 'Radio',
      price: 15,
      stock: 10,
      description: 'Radio guapa',
      category: 'electronics',
      image: 'imageRadio.jpg',
      rating: {
        count: 2,
        rate: 4,
      },
    },
  ];

  filterProductsByCategory(products: Product[], category: CategoryType): Product[] {
    return products.filter((p) => p.category === category); //Igualito a java .
  }

  applyDiscount(products: Product[], percentage: number): Product[] {
    return products.map((p) => {
      p.price = (p.price / percentage) * 100;
      return p;
    }); //Cuando se hacen varias operaciones se ponen los {}
  }

  ngOnInit() {
    this.applyDiscount(this.filterProductsByCategory(this.products, 'electronics'), 10);
  }
}
