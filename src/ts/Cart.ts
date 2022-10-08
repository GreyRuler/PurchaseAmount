import Movie from './Movie';

export default class Cart {
  private _items: Movie[] = [];

  get items() {
    return this._items;
  }

  add(item: Movie): void {
    this._items.push(item);
  }

  /**
     * Удаляет элемент из корзины и возвращает массив
     */
  removeById(id: number): Movie[] {
    const index = this._items.findIndex((item) => item.id === id);
    return this._items.splice(index, 1);
  }

  /**
     * Подсчитывает общую стоимость корзины
     */
  amount(): number {
    return this._items.reduce((value: number, item: Movie) => {
      value += item.price;
      return value;
    }, 0);
  }

  /**
     * Подсчитывает общую стоимость корзины со скидкой
     * @param discount
     */
  amountWithDiscount(discount: number): number {
    const amount = this._items.reduce((value: number, item: Movie) => {
      value += item.price;
      return value;
    }, 0);
    return amount * (discount / 100);
  }
}
