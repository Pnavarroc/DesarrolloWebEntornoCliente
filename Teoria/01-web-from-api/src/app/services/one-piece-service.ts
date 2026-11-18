import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { ApiResponseChapterBySeason, Season } from '../common/models/one-piece.model';
import { enviroment } from '../enviroment/enviroment';

@Service()
export class OnePieceService {
  private readonly http: HttpClient = inject(HttpClient);

  getSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>(enviroment.UrlBase + '/seasons').pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      }),
    );
  }

  getSeasonById(id: string, page: number): Observable<ApiResponseChapterBySeason | null> {
    return this.http
      .get<ApiResponseChapterBySeason>(enviroment.UrlBase + '/season/' + id + '/?page=' + page)
      .pipe(
        catchError((error) => {
          console.log(error);
          return of(null);
        }),
      );
  }

  getEpisodeByNumber(number: number): Observable<ApiResponseChapterBySeason | null>{
    return this.http.get<ApiResponseChapterBySeason>(
      enviroment.UrlBase+"/number/"+number
    ).pipe(
      catchError(error=>{
        console.log(error);
        return of(null);
      })
    );
  }
}
