import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ApiResponseYugiOh } from '../common/models/card.model';
import { enviroment } from '../enviroment/enviroment';

@Service()
export class YugiOhService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getCards(): Observable<ApiResponseYugiOh | null>{
    return this.httpClient.get<ApiResponseYugiOh>(enviroment.URLBase).pipe(
      catchError(error=>{
        console.log(error);
        return of(null);
      })
    );
  }

  getCardById(id: number): Observable<ApiResponseYugiOh | null>{
    return this.httpClient.get<ApiResponseYugiOh>(enviroment.URLBase+ '?id='+id).pipe(
      catchError(error=>{
        console.log(error);
        return of(null);
      })
    );
  }

}
