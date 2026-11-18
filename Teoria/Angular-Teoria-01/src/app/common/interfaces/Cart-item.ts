import { Product } from './interface';

//Crear la interfaz CartItem
export interface CartItem
{
  quantity: number;
  product: Product;
}

//Crea la interfaz Order(pedido) que consolide la compra del usuario
//utilizando las interfaces previas y tipos especificos para el metodo de pago
export type PaymentMethod = "credit_card" | "paypal" | "bank_transfer";

export interface Order
{
  orderId: number,
  items: CartItem[],
  totalAmount: number,
  createdAt: Date,
  paymentMethod: PaymentMethod;
}
