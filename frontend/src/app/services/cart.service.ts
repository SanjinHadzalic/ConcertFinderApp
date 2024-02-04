// cart.service.ts
import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from '../shared/models/Event';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() {}

  getCartItems() {
    return this.cart;
  }

  addToCart(event: Event) {
    this.cart.push(new CartItem(event));
    // localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  deleteFromCart(event: Event) {
    // Implement the logic to delete from the cart
  }

  updateQuantity(id: number) {
    // Implement the logic to update quantity
  }
}
