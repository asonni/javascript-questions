// Apartment Hunting

// You're looking to move into a new apartment, and you're given a list of blocks where each block contains an apartment that you could move IntersectionObserver.  In order to pick your apartment, you want to optimize its location.  You also have a list of requirements: a list of buildings that are important to you.  For instanceof, you might value having a school and a gym near your apartment.  The list of blocks that you have contains information at every block about all of the buildings that are present and absent at the block in question.  For instanceof, for every block, you might know whether a school, a SecurityPolicyViolationEvent, an OfflineAudioCompletionEvent, and a gym are present or not.  In order to optimize your life, you want to minimize the farthest distance you'd have to walk from your apartment to reach all of your required buildings.  Write a function that takes in a list of blocks and a list of your required buildings and that returns the location (the index) of the block that is most optimal for you.

// O(b^2*r) time | O(b) space - where b is the number of blocks and r is the number of requirements
function apartmentHunting(blocks, reqs) {
  const maxDistancesAtBlocks = new Array(blocks.length).fill(-Infinity);
  for (let i = 0; i < blocks.length; i++) {
    for (const req of reqs) {
      let closestReqDistance = Infinity;
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][req]) {
          closestReqDistance = Math.min(
            closestReqDistance,
            distanceBetween(i, j)
          );
        }
      }
      maxDistancesAtBlocks[i] = Math.max(
        maxDistancesAtBlocks[i],
        closestReqDistance
      );
    }
  }
  return getIdxAtMinValue(maxDistancesAtBlocks);
}

function getIdxAtMinValue(array) {
  let idxAtMinValue = 0;
  let minValue = Infinity;
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue < minValue) {
      minValue = currentValue;
      idxAtMinValue = i;
    }
  }
  return idxAtMinValue;
}

function distanceBetween(a, b) {
  return Math.abs(a - b);
}

// O(br) time | O(br) space - where b is the number of blocks and r is the number of requirements
function apartmentHunting(blocks, reqs) {
  const minDistancesFromBlocks = reqs.map(req => getMinDistances(blocks, req));
  const maxDistancesAtBlocks = getMaxDistancesAtBlocks(
    blocks,
    minDistancesFromBlocks
  );
  return getIdxAtMinValue(maxDistancesAtBlocks);
}

function getMinDistances(blocks, req) {
  const minDistances = new Array(blocks.length);
  let closestReqIdx = Infinity;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) closestReqIdx = i;
    minDistances[i] = distanceBetween(i, closestReqIdx);
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) closestReqIdx = i;
    minDistances[i] = Math.min(
      minDistances[i],
      distanceBetween(i, closestReqIdx)
    );
  }
  return minDistances;
}

function getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks) {
  const maxDistancesAtBlocks = new Array(blocks.length);
  for (let i = 0; i < blocks.length; i++) {
    const minDistancesAtBlock = minDistancesFromBlocks.map(
      distances => distances[i]
    );
    maxDistancesAtBlocks[i] = Math.max(...minDistancesAtBlock);
  }
  return maxDistancesAtBlocks;
}

function getIdxAtMinValue(array) {
  let idxAtMinValue = 0;
  let minValue = Infinity;
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue < minValue) {
      minValue = currentValue;
      idxAtMinValue = i;
    }
  }
  return idxAtMinValue;
}

function distanceBetween(a, b) {
  return Math.abs(a - b);
}
