import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseRM } from '../common/models/character.model';

@Service()
export class RmService {
  private readonly http: HttpClient = inject(HttpClient);

  /*getCharacters(): Observable<ApiResponseRM>{
    return this.http.get('https://rickandmortyapi.com/api/character').pipe(

    );
  }*/
}
