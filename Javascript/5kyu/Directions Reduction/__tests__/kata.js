import { dirReduc } from '../kata';
describe('Directions Reduction', () => {
  it('should trim path', () => {
    const a = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'];
    expect(dirReduc(a)).toEqual(['WEST']);
    const b = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH'];
    expect(dirReduc(b)).toEqual([]);
    const c = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH'];
    expect(dirReduc(c)).toEqual(['NORTH']);
    const u = ['EAST', 'EAST', 'WEST', 'NORTH', 'WEST', 'EAST', 'EAST', 'SOUTH', 'NORTH', 'WEST'];
    expect(dirReduc(u)).toEqual(['EAST', 'NORTH']);
    const v = ['NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH'];
    expect(dirReduc(v)).toEqual(['NORTH', 'EAST']);
    const x = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
    expect(dirReduc(x)).toEqual(['NORTH', 'WEST', 'SOUTH', 'EAST']);
  });
});
