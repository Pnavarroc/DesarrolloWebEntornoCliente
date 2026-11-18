import { Component } from '@angular/core';
import { Role, User } from '../../../common/interfaces/interface';

@Component({
  imports: [],
  selector: 'app-tipos-datos-component',
  styleUrl: './tipos-datos-component.css',
  templateUrl: './tipos-datos-component.html',
})
export class TiposDatosComponent
{

  color: string = "rojo";
  name: string = "Pablo Navarro";
  edad: number = 21;
  numeroFloat: number = 21.34;

  booleanData: boolean = false;

  //Collections

  colores: string[] = ["Rojo", "Verde", "Azul"];

  numbers: number[] = [1,2,3,4,5,12,45,2];

  //Tipos

  rol: Role = "guest";

  usuario: User =
  {
    id: 1,
    name: "Pablo Navarro",
    email: "pablo.navarro@correo.com",
    role: "admin",
    phoneNumber: "365448247",
  }



}
