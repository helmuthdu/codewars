export const isValidWalk = walk => {
  const count = c => walk.filter(v => v === c).length;
  return walk.length === 10 && count('w') === count('e') && count('n') === count('s');
};

const isValidWalkAlt = walk => {
  const DIRECTIONS = {
    n: { axis: 1, value: 1 },
    s: { axis: 1, value: -1 },
    e: { axis: 0, value: 1 },
    w: { axis: 0, value: -1 },
  };

  if (walk.length > 10 || walk.length < 10) return false;

  const currentPosition = [0, 0]; // [x, y]
  walk.forEach(w => {
    currentPosition[DIRECTIONS[w].axis] = currentPosition[DIRECTIONS[w].axis] + DIRECTIONS[w].value;
  });

  return currentPosition.every(p => p === 0);
};
