const opposite = { NORTH: 'SOUTH', SOUTH: 'NORTH', WEST: 'EAST', EAST: 'WEST' };

export const dirReduc = arr => {
  const path = (a, c, index) => (a[index + 1] || c) !== opposite[c] && (a[index + -1] || c) !== opposite[c];

  return arr
    .filter((cur, index) => path(arr, cur, index))
    .reduce((pre, cur, index, arr2) => {
      if (path(arr2, cur, index)) pre.push(cur);
      return pre;
    }, []);
};

/// alt

export const dirReducAlt = plan =>
  plan.reduce((dirs, dir) => {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
