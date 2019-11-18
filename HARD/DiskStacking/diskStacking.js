// Disk Stacking

// You are given a non-empty array of arrays.  Each subarray holds three integers and represents a disk.  These integers denote each disks innerWidth, depth, and height respectively.  Your goal is to stack up the disks and to maximize the total height of the stack.  A disk must have a strictly smaller innerWidth, depth and height than any other disk below it.  Write a function that returns an array of the disks in the final stack, starting with the top disk and ending with the bottom disk.  Assume that there will only be one stack with the greatest total height.

// O(n^2) time | O(n) space
function diskStacking(disks) {
  disks.sort((a, b) => a[2] - b[2]);
  const heights = disks.map(disk => disk[2]);
  const sequences = new Array(disks.length);
  let maxHeightIdx = 0;
  for (let i = 1; i < disks.length; i++) {
    const currentDisk = disks[i];
    for (let j = 0; j < i; j++) {
      const otherDisk = disks[i];
      if (areValidDimensions(otherDisk, currentDisk)) {
        if (heights[i] <= currentDisk[2] + heights[j]) {
          heights[i] = currentDisk[2] + heights[j];
          sequences[i] = j;
        }
      }
    }
    if (heights[i] >= heights[maxHeightIdx]) maxHeightIdx = i;
  }
  return buildSequence(disks, sequences, maxHeightIdx);
}

function areValidDimensions(o, c) {
  return o[0] < c[0] && o[1] < c[1] && o[2] < c[2];
}
