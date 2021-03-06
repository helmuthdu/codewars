import { solve } from '../kata';

describe('A trivial map (1x1)', function() {
  const map = [[true]];

  it("Should return an empty array, since we're already at the goal", function() {
    expect(solve(map, { x: 0, y: 0 }, { x: 0, y: 0 })).toEqual([]);
  });
});

describe('A pretty simple map (2x2)', function() {
  const map = [[true, false], [true, true]];

  it('Should return the only correct move', function() {
    expect(solve(map, { x: 0, y: 0 }, { x: 1, y: 0 })).toEqual(['right']);
  });

  it('Should return the only moves necessary', function() {
    expect(solve(map, { x: 0, y: 0 }, { x: 1, y: 1 })).toEqual(['right', 'down']);
  });
});

describe('A linear map(1x4)', function() {
  const map = [[true], [true], [true], [true]];

  it('Should return a chain of moves to the right', function() {
    expect(solve(map, { x: 0, y: 0 }, { x: 3, y: 0 })).toEqual(['right', 'right', 'right']);
  });

  it('Should return a chain of moves to the left', function() {
    expect(solve(map, { x: 3, y: 0 }, { x: 0, y: 0 })).toEqual(['left', 'left', 'left']);
  });
});

describe('Should walk around an obstacle (3x3 map)', function() {
  const map = [[true, true, true], [false, false, true], [true, true, true]];

  it('Should return the right sequence of moves', function() {
    expect(solve(map, { x: 0, y: 0 }, { x: 2, y: 0 })).toEqual(['down', 'down', 'right', 'right', 'up', 'up']);
  });
});

describe('Should be able to change directions multiple times (5x5 map)', function() {
  const map = [
    [true, true, false, false, false],
    [false, true, true, false, false],
    [false, false, true, true, false],
    [false, false, false, true, true],
    [false, false, false, false, true],
  ];

  it('Should return a step sequence of moves', function() {
    expect(solve(map, { x: 0, y: 0 }, { x: 4, y: 4 })).toEqual([
      'down',
      'right',
      'down',
      'right',
      'down',
      'right',
      'down',
      'right',
    ]);
  });
});

describe('Should avoid dead-ends (5x5 map)', function() {
  const map = [
    [true, true, true, false, true],
    [false, false, true, false, true],
    [true, true, true, true, true],
    [true, false, true, false, false],
    [false, true, true, true, true],
  ];

  it('Should return the right moves', function() {
    expect(solve(map, { x: 0, y: 0 }, { x: 4, y: 4 })).toEqual([
      'down',
      'down',
      'right',
      'right',
      'right',
      'right',
      'down',
      'down',
    ]);
  });
});
