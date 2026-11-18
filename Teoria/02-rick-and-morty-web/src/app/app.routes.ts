import { Routes } from '@angular/router';
import { HomeComponent } from './components/web/home-component/home-component';
import { CharacterListComponent } from './components/web/character-list-component/character-list-component';
import { CharacterDetailComponent } from './components/web/character-detail-component/character-detail-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'character-list',
    component: CharacterListComponent,
  },
  {
    path: 'character-detail/:id',
    component: CharacterDetailComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];
