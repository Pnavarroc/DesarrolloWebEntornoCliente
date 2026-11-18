import { Component } from '@angular/core';
import { Category } from '../../../common/interfaces/interface';

@Component({
  imports: [],
  selector: 'app-categories-list-component',
  styleUrl: './categories-list-component.css',
  templateUrl: './categories-list-component.html',
})
export class CategoriesListComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'selectronic',
      active: true,
      icon: 'electronnic',
    },
    {
      id: 2,
      name: 'clouthing',
      active: false,
      icon: 'clouthing',
    },
    {
      id: 3,
      name: 'books',
      active: true,
      icon: 'books',
    },
    {
      id: 4,
      name: 'home',
      active: true,
      icon: 'home',
    }
  ];

  categoriesShow = [...this.categories];


  protected eliminarCat(index: number) {
    this.categoriesShow.splice(index, 1);
  }

  protected refreshCats() {
    this.categoriesShow = [...this.categories];
  }
}
