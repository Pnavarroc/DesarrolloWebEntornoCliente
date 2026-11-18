import { Routes } from '@angular/router';
import { Inicio } from './components/web/inicio/inicio';
import { Seasons } from './components/web/seasons/seasons';
import { Episodes } from './components/web/episodes/episodes';
import { EpisodeDetail } from './components/web/episode-detail/episode-detail';
import { ErrorComponent } from './components/structure/error-component/error-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: Inicio,
  },
  {
    path: 'seasons',
    component: Seasons,
  },
  {
    path: 'season-episodes/:seasonId',
    component: Episodes,
  },
  {
    path: 'episode-detail/:episodeNumber',
    component: EpisodeDetail,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
