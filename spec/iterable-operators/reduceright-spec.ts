import '../iterablehelpers';
import { of, empty, reduceRight } from 'ix/iterable';

test('Iterable#reduceRight no seed', () => {
  const xs = of(0, 1, 2, 3, 4);
  const ys = reduceRight(xs, (x, y, i) => x + y + i);
  expect(ys).toBe(16);
});

test('Iterable#reduceRight no seed empty throws', () => {
  const xs = empty<number>();
  expect(() => reduceRight(xs, (x, y, i) => x + y + i)).toThrow();
});

test('Iterable#reduceRight with seed', () => {
  const xs = of(0, 1, 2, 3, 4);
  const ys = reduceRight(xs, (x, y, i) => x - y - i, 20);
  expect(ys).toBe(0);
});

test('Iterable#reduceRight with seed empty', () => {
  const xs = empty<number>();
  const ys = reduceRight(xs, (x, y, i) => x - y - i, 20);
  expect(ys).toBe(20);
});
