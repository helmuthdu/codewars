import { defaultArguments } from '../kata';

function add(a, b) {
  return a + b;
}

describe('Default Arguments', () => {
  it('should run the function proxy', () => {
    const add_ = defaultArguments(add, { b: 9 });
    expect(add_(10)).toEqual(19);
    expect(add_(10, 5)).toEqual(15);

    const add_2 = defaultArguments(add_, { b: 3 });
    expect(add_2(10)).toEqual(13);
  });
});
