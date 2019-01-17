import { Primes } from '../kata';

function verify(from_n, ...vals) {
  const stream = Primes.stream();
  for (let i = 0; i < from_n; ++i) stream.next();
  for (let v of vals) expect(stream.next().value).toEqual(v);
}

describe('Small numbers', () => {
  it('0_10', () => verify(0, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29));
  it('10_10', () => verify(10, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71));
  it('100_10', () => verify(100, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601));
  it('1000_10', () => verify(1000, 7927, 7933, 7937, 7949, 7951, 7963, 7993, 8009, 8011, 8017));
});
