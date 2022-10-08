export default class Movie {
  readonly id: number;

  readonly title: string;

  readonly age: number;

  readonly country: string;

  readonly slogan: string;

  readonly genre: string;

  readonly time: string;

  readonly price: number;

  constructor(
    id: number,
    title: string,
    age: number,
    country: string,
    slogan: string,
    genre: string,
    time: string,
    price: number,
  ) {
    this.id = id;
    this.title = title;
    this.age = age;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.time = time;
    this.price = price;
  }
}
