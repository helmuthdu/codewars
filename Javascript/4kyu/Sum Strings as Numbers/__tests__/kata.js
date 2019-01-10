import { sumStrings } from '../kata';

let returned;

function msg(a, b) {
  if (typeof returned !== 'string') {
    return 'Function must return a string value';
  } else {
    return "sumStrings('" + a + "', '" + b + "')";
  }
}

const assert = (a, b, ans) => {
  returned = sumStrings(a, b);
  expect(returned).toEqual(ans, msg(a, b, returned));
};

describe('Sum Strings as Numbers', () => {
  it('should sum values', () => {
    assert('123', '456', '579');
    assert('8797', '45', '8842');
    assert('800', '9567', '10367');
    assert('99', '1', '100');
    assert('00103', '08567', '8670');
    assert('', '5', '5');
    assert('712569312664357328695151392', '8100824045303269669937', '712577413488402631964821329');
    assert('50095301248058391139327916261', '81055900096023504197206408605', '131151201344081895336534324866');
  });
});
