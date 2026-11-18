import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-teoria7',
  styleUrl: './teoria7.css',
  templateUrl: './teoria7.html',
})
export class Teoria7 {
  contador: WritableSignal<number> = signal<number>(0);
  miContador: number = 0;

  contadorProtected = this.contador.asReadonly();

  usuario: WritableSignal<Usuario> = signal<Usuario>({
    nombre: 'Pablo',
    edad: 21,
  });

  constructor() {
    effect(() => {
      console.log('El usuario ha cambiado ', this.usuario());
    });

    setInterval(()=>{
      this.miContador++;
      //this.contador.update(val => val +1);
    })
  }

  ejemplo() {
    console.log('Signal: ', this.contador);
    console.log('Contenido de la signal: ', this.contador());

    this.contador.set(8);
    this.miContador = 8;
    console.log('Contenido de la signal después de pulsar el botón: ', this.contador());

    this.contador.update((num) => num * 2);
    this.miContador *= 2;
    console.log('Contenido de la signal después del update: ', this.contador());
  }

  protected ejemplo2() {
    this.miContador += 5;
  }
  protected ejemplo3() {
    this.contador.update((num) => num + 5);
  }

  protected cambiarUsuario() {
    const usuarioActual = this.usuario();
    usuarioActual.nombre = 'Luis';
    usuarioActual.edad = 32;
  }

  protected cambiarUsuarioOk() {
    this.usuario.update((usu) => ({
      ...usu,
      nombre: 'Luis',
    }));
    // FORMA CORRECTA
  }

  // Ejercicio 1 hecho en product-card-component.ts

  // Ejercicio 2

}



interface Usuario{
  nombre: string;
  edad: number;
}
