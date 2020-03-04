import { missingInteger } from '../kata';

let returned;

function msg(a, ans) {
  return `missingInteger(${a}) returned ${ans}`;
}

const assert = (a, ans) => {
  returned = missingInteger(a);
  expect(returned).toEqual(ans, msg(a, returned));
};

describe('Missing Integer', () => {
  it('should find missing integer', () => {
    assert([1, 3, 6, 4, 1, 2], 5);
    assert([1, 2, 3], 4);
    assert([-1, -3], 1);
  });
});
