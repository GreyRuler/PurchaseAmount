import { expect, test } from '@jest/globals';
import Cart from '../Cart';
import Movie from '../Movie';

test('', () => {
  const cart = new Cart();
  const movie = new Movie(
    1,
    'Мстители',
    2012,
    'США',
    '"Avengers Assemble!',
    'фантастика, боевик, фэнтези, приключения',
    '137 мин. / 02:17',
    1200,
  );

  cart.add(movie);
  cart.removeById(1);

  expect(cart.items.length === 0).toBe(true);
});

test('', () => {
  const cart = new Cart();
  const movie1 = new Movie(
    1,
    'Мстители',
    2012,
    'США',
    '"Avengers Assemble!',
    'фантастика, боевик, фэнтези, приключения',
    '137 мин. / 02:17',
    1200,
  );
  const movie2 = new Movie(
    2,
    'Мстители 2',
    2012,
    'США',
    '"Avengers Assemble!',
    'фантастика, боевик, фэнтези, приключения',
    '137 мин. / 02:17',
    1800,
  );

  cart.add(movie1);
  cart.add(movie2);

  const expected = 3000;
  const received = cart.amount();

  expect(received).toBe(expected);
});

test('', () => {
  const cart = new Cart();
  const movie1 = new Movie(
    1,
    'Мстители',
    2012,
    'США',
    '"Avengers Assemble!',
    'фантастика, боевик, фэнтези, приключения',
    '137 мин. / 02:17',
    1200,
  );
  const movie2 = new Movie(
    2,
    'Мстители 2',
    2012,
    'США',
    '"Avengers Assemble!',
    'фантастика, боевик, фэнтези, приключения',
    '137 мин. / 02:17',
    1800,
  );

  cart.add(movie1);
  cart.add(movie2);

  const expected = 1500;
  const received = cart.amountWithDiscount(50);

  expect(received).toBe(expected);
});
