import { Component, OnInit } from '@angular/core';
import { Product, User } from '../../../common/interfaces/interface';
import { CartItem } from '../../../common/interfaces/Cart-item';


@Component({
  imports: [],
  selector: 'app-teoria-4',
  styleUrl: './teoria-4.css',
  templateUrl: './teoria-4.html',
})
export class Teoria4 implements OnInit {
  miArray: number[] = [1, 2, 3];

  ngOnInit() {
    this.ejemplo();


  }
  ejemplo() {
    this.miArray.push(2); //Añade al final del Array
    console.log(this.miArray);
  }

  ejemplo2(){
    const carrito = [{id:1, qty:1}];
    carrito[0].qty = 2;


    const updatedCart = carrito.map
    (item => item.id === 1 ? {...item, qty:2} : item);
  }

  //Desestructuración
  ejemplo3(){
    const usuario1:User = {
      id: 1,
      name: "Pablo",
      email: "pnavarro@gmail.com",
      role: 'admin',
      phoneNumber: "765447656"
    }


    const{name, email} = usuario1; //Funciona como getNombre() y getEmail() en java

    console.log(name,email);

    const updateUser ={...usuario1, role:'guest'}; //Funciona como setRole() en java

    console.log(updateUser);

  }

  //Funciones de Array

  //Muy parecido a los streams de Java -> devuelve un nuevo array no modifica el inicial
  ejemploArrays(){
    //map: Transformar los elementos de un array
    //filter: Filtrar los elementos de un array que cumplan una condición
    //reduce: Acumular los elementos de un array en un único valor.

    const miArray = [1,2,3];
    const miArray2 = miArray.map(n=> n = n+1);

    console.log('map ', miArray2);


    console.log(  'filtrar los elementos mayores de 2', miArray.filter( n=> n>2 ));

    console.log('reduce', miArray.reduce((a,b) => a+b)); //Suma todos los elementos del array.
  }

  ejemploObjetos(){
    const original = {title: 'Camiseta', price: 20};
    const copia = original; //Está apuntando a original.  PUTOS PUNTEROS.

    copia.price = 25;

    console.log(original.price);

    const original2 = { title: 'Camiseta', price: 20 };
    const copiaSegura = {...original2}; //Esto hace una copia segura del objeto original2.

    copiaSegura.price = 50;

    console.log(original2.price);



    const calculateTotalItems = (carrito: CartItem[]): number => {
      return carrito.reduce((item1, item2) => item1 + item2.quantity, 0);
    };

    const calculateTotalPrice = (carrito: CartItem[]): number => {
      return carrito.reduce((a, b) => a + b.quantity * b.product.price, 0);
    };


    const addToCartInmutable = (carrito:CartItem[], newItem:CartItem):CartItem[] =>{
      //Si no existe el producto se le añade.
      //Si existe , habrá que añadir la cantidad.

      const exists = carrito.find(item => item.product.id === newItem.product.id);

      if (exists) {
        return carrito.map((item) =>
          item.product.id === newItem.product.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item,
        );
      } else return [...carrito, newItem];


    }
  }


  /**
   * Ejercicio nuevo.
   *
   */




}
