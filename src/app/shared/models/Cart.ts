import { CartItem } from './CartItem';

export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    const totalPrice = this.items.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    return totalPrice;
  }
}
