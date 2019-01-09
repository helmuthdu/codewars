function solve(map, miner, exit) {
  const walked = {};

  const findExit = (curX, curY, path) => {
    if (curX === exit.x && curY === exit.y) {
      return path;
    }

    if (!map[curX] || !map[curX][curY] || walked[curX + 'x' + curY]) {
      return;
    }

    walked[curX + 'x' + curY] = true;

    return (
      findExit(curX + 1, curY, path.concat('right')) ||
      findExit(curX, curY + 1, path.concat('down')) ||
      findExit(curX - 1, curY, path.concat('left')) ||
      findExit(curX, curY - 1, path.concat('up'))
    );
  };

  return findExit(miner.x, miner.y, []);
}
