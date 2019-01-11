import { isValidWalk } from '../kata';

describe('Walk Validator', function() {
  const fail = [
    ['n'],
    ['n', 's'],
    ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
    ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's', 'e', 'w'],
    ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n'],
    ['e', 'e', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'],
  ];

  const pass = [
    ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
    ['e', 'w', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'],
    ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'],
  ];

  it('should return false if walk is too short', () => {
    expect(isValidWalk(fail[0])).toBeFalsy();
    expect(isValidWalk(fail[1])).toBeFalsy();
  });

  it('should return false if walk is too long', () => {
    expect(isValidWalk(fail[2])).toBeFalsy();
    expect(isValidWalk(fail[3])).toBeFalsy();
  });

  it('should return false if walk does not bring you back to start', () => {
    expect(isValidWalk(fail[4])).toBeFalsy();
    expect(isValidWalk(fail[5])).toBeFalsy();
  });

  it('should return true for a valid walk', () => {
    expect(isValidWalk(pass[0])).toBeTruthy();
    expect(isValidWalk(pass[1])).toBeTruthy();
    expect(isValidWalk(pass[2])).toBeTruthy();
  });
});
