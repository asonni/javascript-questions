// Rectangle Mania

// Write a function that takes in a list of Cartesian coordinates (x,y coordinates) and returns the number of rectangles formed by these coordinates.  Note that a rectangle must have four corners present in order to be counted, and we only care about rectangles with sides parallel to the x and y axes (with horizontal and vertical sides - no diagonal sides). You can also assume that no coordinate will be farther than 100 unites from the origin.

// O(n^2) time | O(n^2) space - where n is the number of coordinates
function rectangleMania(coords) {
  const coordsTable = getCoordsTable(coords);
  return getRectangleCount(coords, coordsTable);
}

function getCoordsTable(coords) {
  const coordsTable = {};
  for (const coord1 of coords) {
    const coord1Directions = {
      [UP]: [],
      [RIGHT]: [],
      [DOWN]: [],
      [LEFT]: []
    };
    for (const coord2 of coords) {
      const coord2Direction = getCoordDirection(coord1, coord2);
      if (coord2Direction in coord1Directions)
        coord1Directions[coord2Direction].push(coord2);
    }
    const coord1String = coordToString(coord1);
    coordsTable[coord1String] = coord1Directions;
  }
  return coordsTable;
}

function getCoordDirection(coord1, coord2) {
  const [x1, y1] = coord1;
  const [x2, y2] = coord2;
  if (y2 === y1) {
    if (x2 > x1) {
      return RIGHT;
    } else if (x2 < x1) {
      return LEFT;
    }
  } else if (x2 === x1) {
    if (y2 > y1) {
      return UP;
    } else if (y2 < y1) {
      return DOWN;
    }
  }
  return "";
}

function getRectangleCount(coords, coordsTable) {
  let rectangleCount = 0;
  for (const coord of coords) {
    rectangleCount += clockwiseCountRectangles(coord, coordsTable, UP, coord);
  }
  return rectangleCount;
}

function clockwiseCountRectangles(coord, coordsTable, direction, origin) {
  const coordString = coordToString(coord);
  if (direction === LEFT) {
    const rectangleFound = coordsTable[coordString][LEFT].includes(origin);
    return rectangleFound ? 1 : 0;
  } else {
    let rectangleCount = 0;
    const nextDirection = getNextClockwiseDirection(direction);
    for (const nextCoord of coordsTable[coordString][direction]) {
      rectangleCount += clockwiseCountRectangles(
        nextCoord,
        coordsTable,
        nextDirection,
        origin
      );
    }
    return rectangleCount;
  }
}

function getNextClockwiseDirection(direction) {
  if (direction === UP) return RIGHT;
  if (direction === RIGHT) return DOWN;
  if (direction === DOWN) return LEFT;
  return "";
}

function coordToString(coord) {
  const [x, y] = coord;
  return `${x}-${y}`;
}

const UP = "up";
const RIGHT = "right";
const DOWN = "down";
const LEFT = "left";

// O(n^2) time | O(n) space - where n is the number of coordinates
function rectangleMania(coords) {
  const coordsTable = getCoordsTable(coords);
  return getRectangleCount(coords, coordsTable);
}

function getCoordsTable(coords) {
  const coordsTable = { x: {}, y: {} };
  for (const coord of coords) {
    const [x, y] = coord;
    coordsTable.x[x] = coordsTable.x[x] || [];
    coordsTable.x[x].push(coord);
    coordsTable.y[y] = coordsTable.y[y] || [];
    coordsTable.y[y].push(coord);
  }
  return coordsTable;
}

function getRectangleCount(coords, coordsTable) {
  let rectangleCount = 0;
  for (const coord of coords) {
    const lowerLeftY = coord[1];
    rectangleCount += clockwiseCountRectangles(
      coord,
      coordsTable,
      UP,
      lowerLeftY
    );
  }
  return rectangleCount;
}

function clockwiseCountRectangles(coord1, coordsTable, direction, lowerLeftY) {
  const [x1, y1] = coord1;
  if (direction === DOWN) {
    const relevantCoords = coordsTable.x[x1];
    for (const coord2 of relevantCoords) {
      const lowerRightY = coord2[1];
      if (lowerRightY === lowerLeftY) return 1;
    }
    return 0;
  } else {
    let rectangleCount = 0;
    if (direction === UP) {
      const relevantCoords = coordsTable.x[x1];
      for (const coord2 of relevantCoords) {
        const y2 = coord2[1];
        const isAbove = y2 > y1;
        if (isAbove)
          rectangleCount += clockwiseCountRectangles(
            coord2,
            coordsTable,
            RIGHT,
            lowerLeftY
          );
      }
    } else if (direction === RIGHT) {
      const relevantCoords = coordsTable.y[y1];
      for (const coord2 of relevantCoords) {
        const x2 = coord2[0];
        const isRight = x2 > x1;
        if (isRight)
          rectangleCount += clockwiseCountRectangles(
            coord2,
            coordsTable,
            DOWN,
            lowerLeftY
          );
      }
    }
    return rectangleCount;
  }
}

const UP = "up";
const RIGHT = "right";
const DOWN = "down";

// O(n^2) time | O(n) space - where n is the number of coordinates
function rectangleMania(coords) {
  const coordsTable = getCoordsTable(coords);
  return getRectangleCount(coords, coordsTable);
}

function getCoordsTable(coords) {
  const coordsTable = {};
  for (const coord of coords) {
    const coordString = coordToString(coord);
    coordsTable[coordString] = true;
  }
  return coordsTable;
}

function getRectangleCount(coords, coordsTable) {
  let rectangleCount = 0;
  for (const [x1, y1] of coords) {
    for (const [x2, y2] of coords) {
      if (!isInUpperRight([x1, y1], [x2, y2])) continue;
      const upperCoordString = coordToString([x1, y2]);
      const rightCoordString = coordToString([x2, y1]);
      if (upperCoordString in coordsTable && rightCoordString in coordsTable)
        rectangleCount++;
    }
  }
  return rectangleCount;
}

function isInUpperRight(coord1, coord2) {
  const [x1, y1] = coord1;
  const [x2, y2] = coord2;
  return x2 > x1 && y2 > y1;
}

function coordToString(coord) {
  const [x, y] = coord;
  return `${x}-${y}`;
}
