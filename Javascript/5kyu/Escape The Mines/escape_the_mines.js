// Start location will be in the following format:
const findShortestPath = (startPoint, grid) => {
  const distanceY = startPoint[0];
  const distanceX = startPoint[1];

  // Each "location" will store its coordinates
  // and the shortest path required to arrive there
  const location = {
    distanceY,
    distanceX,
    path: [],
    status: 'Start',
  };

  // Initialize the queue with the start location already inside
  const queue = [location];
  let path = [];

  // Loop through the grid searching for the goal
  while (queue.length > 0) {
    // Take the first location off the queue
    const currentLocation = queue.shift();

    ['up', 'right', 'down', 'left'].some(direction => {
      // Explore up
      const newLocation = exploreInDirection(currentLocation, direction, grid);
      if (newLocation.status === 'Goal') {
        path = newLocation.path;
        return true;
      } else if (newLocation.status === 'Valid') {
        queue.push(newLocation);
      }
    });
  }

  return path;
};

// This function will check a location's status
// (a location is "valid" if it is on the grid, is not an "obstacle",
// and has not yet been visited by our algorithm)
// Returns "Valid", "Invalid", "Blocked", or "Goal"
const locationStatus = (location, grid) => {
  const gridSize = grid.length;
  const { distanceY, distanceX } = location;

  if (
    location.distanceX < 0 ||
    location.distanceX >= gridSize ||
    location.distanceY < 0 ||
    location.distanceY >= gridSize
  ) {
    // location is not on the grid--return false
    return 'Invalid';
  } else if (grid[distanceY][distanceX] === 'Goal') {
    return 'Goal';
  } else if (grid[distanceY][distanceX] !== 'Empty') {
    // location is either an obstacle or has been visited
    return 'Blocked';
  } else {
    return 'Valid';
  }
};

// Explores the grid from the given location in the given
// direction
const exploreInDirection = (currentLocation, direction, grid) => {
  const newPath = currentLocation.path.slice();
  newPath.push(direction);

  let { distanceY, distanceX } = currentLocation;

  if (direction === 'up') {
    distanceX -= 1;
  } else if (direction === 'right') {
    distanceY += 1;
  } else if (direction === 'down') {
    distanceX += 1;
  } else if (direction === 'left') {
    distanceY -= 1;
  }

  const newLocation = {
    distanceY,
    distanceX,
    path: newPath,
    status: 'Unknown',
  };
  newLocation.status = locationStatus(newLocation, grid);

  // If this new location is valid, mark it as 'Visited'
  if (newLocation.status === 'Valid') {
    grid[newLocation.distanceY][newLocation.distanceX] = 'Visited';
  }

  return newLocation;
};

export function solve(map, miner, exit) {
  // Think of the first index as "distance from the top row"
  // Think of the second index as "distance from the left-most column"

  const grid = map.map(y => y.map(x => (x ? 'Empty' : 'Obstacle')));

  // This is how we would represent the grid with obstacles above
  grid[exit.x][exit.y] = 'Goal';

  return findShortestPath([miner.x, miner.y], grid);
}
