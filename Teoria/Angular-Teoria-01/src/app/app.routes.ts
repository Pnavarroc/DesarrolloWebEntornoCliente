import { Routes } from '@angular/router';
import { MainComponent } from './components/web/main-component/main-component';
import { Teoria4 } from './components/clase/teoria-4/teoria-4';
import { Teoria5 } from './components/clase/teoria5/teoria5';
import { CategoriesListComponent } from './components/web/categories-list-component/categories-list-component';
import { CatalogComponent } from './components/web/catalog-component/catalog-component';
import { Teoria7 } from './components/clase/teoria7/teoria7';
import { UserProfyleComponent } from './components/web/user-profyle-component/user-profyle-component';
import { Teoria8 } from './components/clase/teoria8/teoria8';
import { CartSummary } from './components/web/cart-summary/cart-summary';
import { Teoria9 } from './components/clase/teoria9/teoria9';
import { Teoria9Hijo } from './components/clase/teoria9-hijo/teoria9-hijo';
import { Teoria10 } from './components/clase/teoria10/teoria10';
import { Teoria11 } from './components/clase/teoria11/teoria11';
import { Teoria12 } from './components/clase/teoria12/teoria12';
import { ProductDetailComponent } from './components/web/product-detail-component/product-detail-component';
import { Teoria15 } from './components/clase/teoria15/teoria15';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: MainComponent,
  },
  {
    path: 'teoria4',
    component: Teoria4,
  },
  {
    path: 'teoria5',
    component: Teoria5,
  },
  {
    path: 'teoria7',
    component: Teoria7,
  },
  {
    path: 'teoria15',
    component: Teoria15,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'category-list',
    component: CategoriesListComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'user-profile',
    component: UserProfyleComponent,
  },
  {
    path: 'teoria8',
    component: Teoria8,
  },
  {
    path: 'teoria9',
    component: Teoria9,
  },
  {
    path: 'teoria9-hijo',
    component: Teoria9Hijo,
  },
  {
    path: 'teoria10',
    component: Teoria10,
  },
  {
    path: 'teoria11',
    component: Teoria11,
  },
  {
    path: 'cart-summary',
    component: CartSummary,
  },
  {
    path: 'teoria12',
    component: Teoria12,
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent,
  },
];
