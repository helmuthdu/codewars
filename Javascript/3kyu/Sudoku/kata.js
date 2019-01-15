const check = (matrix, i, j, k) => {
  for (let row = 0; row <= 8; row++) {
    if (row !== i && matrix[row][j] === k) {
      return false;
    }
  }

  for (let col = 0; col <= 8; col++) {
    if (col !== j && matrix[i][col] === k) {
      return false;
    }
  }

  const y = Math.floor(i / 3) * 3;
  const x = Math.floor(j / 3) * 3;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (row !== i && col !== j && matrix[y + row][x + col] === k) {
        return false;
      }
    }
  }
  return true;
};

const solve = matrix => {
  for (let row = 0; row <= 8; row++) {
    for (let col = 0; col <= 8; col++) {
      if (matrix[row][col] !== 0) {
        continue;
      }

      for (let val = 1; val <= 9; val++) {
        if (check(matrix, row, col, val)) {
          matrix[row][col] = val;
          if (solve(matrix)) {
            return true;
          }
          matrix[row][col] = 0;
        }
      }
      return false;
    }
  }

  return true;
};

export const sudoku = grid => {
  solve(grid);
  return grid;
};

// clever solutions:

// export const sudoku = rows => {
//   const cols = _ => rows.map((_, i) => rows.map((_, j) => rows[j][i]));
//
//   const square = (i, j) => {
//     let idxI = ~~(i / 3) * 3;
//     let idxJ = ~~(j / 3) * 3;
//     return [].concat(...rows.slice(idxI, idxI + 3).map(row => row.slice(idxJ, idxJ + 3)));
//   };
//
//   while ([].concat(...rows).includes(0)) {
//     rows.forEach((row, i) => {
//       row.forEach((x, j) => {
//         if (x === 0) {
//           let nums = [...new Set([...rows[i], ...cols()[j], ...square(i, j)])];
//           let possibles = [...Array(9)].map((_, i) => ++i).filter(n => !nums.includes(n));
//           if (possibles.length === 1) row[j] = possibles[0];
//         }
//       });
//     });
//   }
//   return rows;
// };
