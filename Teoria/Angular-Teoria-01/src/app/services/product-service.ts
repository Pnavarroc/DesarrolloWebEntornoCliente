import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Product } from '../common/interfaces/interface';

@Service()
export class ProductService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly urlBase = 'https://fakestoreapi.com/products';

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.urlBase).pipe(
      catchError((error: any) => {
        console.error(error);
        return of([]);
      })
    );
  }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.urlBase + '/categories').pipe(
      catchError((error: any)=>{
        console.error(error);
        return of([]);
      })
    );
  }

  getProductById(id: number): Observable<Product | null>{
    return this.httpClient.get<Product>(this.urlBase+'/' +id).pipe(
      catchError((error: any)=>{
        console.error(error);
        return of(null);
      })
      );
  }

  getProductsByCategory(category: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.urlBase+ "/category/"+category).pipe(
      catchError((error: any)=>{
        console.error(error);
        return of([]);
      })
    );
  }
}
