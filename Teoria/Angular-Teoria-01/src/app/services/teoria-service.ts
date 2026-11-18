import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class TeoriaService {
  // Paso 1:
  private readonly httpClient: HttpClient = inject(HttpClient);

  constructor() {
    this.getDatos();
  }

  getDatos() {
    return this.httpClient.get('https://api-vehiculos.vercel.app/api/v1/coches/get/all');
  }
/*
  getDatos() {
    return this.httpClient
      .post-put-delete('https://api-vehiculos.vercel.app/api/v1/coches/get/all')
      .subscribe((data) => console.log(data));
  }*/
}
