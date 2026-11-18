import { Routes } from '@angular/router';
import { HomeComponent } from './components/web/home-component/home-component';
import { CardListComponent } from './components/web/card-list-component/card-list-component';
import { CardDetailComponent } from './components/web/card-detail-component/card-detail-component';
import { ErrorComponent } from './components/structure/error-component/error-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'card-list',
    component: CardListComponent,
  },
  {
    path: 'card-detail/:id',
    component: CardDetailComponent,
  },
  {
    path: 'card-detail/:id',
    component: CardDetailComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
