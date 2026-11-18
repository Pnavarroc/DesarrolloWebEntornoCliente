import { computed, effect, Service, signal } from '@angular/core';
import { CartItem } from '../common/interfaces/Cart-item';
import { Product } from '../common/interfaces/interface';

const STORAGE_KEY = 'digishop_cart_v1';

@Service()
export class CartService {

  #items = signal<CartItem[]>(this.#loadFromStorage());

  readonly items = this.#items.asReadonly();

  readonly totalItems = computed(()=> this.#items()
    .reduce((acu, item)=> acu + item.quantity, 0));

  readonly totalPrice = computed(()=> this.#items()
    .reduce((acu, item)=> acu + (item.quantity * item.product.price), 0));

  constructor(){
    effect(() => {
      const currentCart = this.#items();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentCart)); //convierte objeto o colección a String
    });
  }

  public addProduct(newCartItem: CartItem): void{
    this.#items.update(items => {
      const index = items.findIndex((i) => i.product.id === newCartItem.product.id);
      if(index > -1){
        return items.map((item, i)=> i===index ? {...item, quantity: item.quantity + newCartItem.quantity + item.quantity} : item);
      }
      return [...items, newCartItem];

    });
  }

  public updateQuantity(productId: number, newQuantity: number): void{
    if(newQuantity <= 0){
      this.removeItem(productId);
      return;
    }

    this.#items.update(items => items.map(item => item.product.id === productId ? {...item, quantity: newQuantity} : item));
  }

  #loadFromStorage(): CartItem[] {
    const savedData: string | null = localStorage.getItem(STORAGE_KEY);

    if (!savedData) return [];

    try {
      return JSON.parse(savedData); // Convierte el String en un Objeto
    } catch {
      return [];
    }
  }

  removeItem(productId: number) {
    this.#items.update(items => items.filter(item => item.product.id !== productId));
  }

  clearCart(){
    this.#items.set([]);
  }
}
