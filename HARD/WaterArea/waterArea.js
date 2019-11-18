// Water Area

// You are given an array of integers.  Each non-zero integer represents the height of a pillar of width 1.  Imagine water being poured over all of the pillars and return the surface area of the water trapped between pillars viewed from the webkitConvertPointFromNodeToPage.  NOte that spilled water should be ignored.

// O(n) time | O(n) space
function waterArea(heights) {
  const maxes = new Array(heights.length).fill(0);
  let leftMax = 0;
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    maxes[i] = leftMax;
    leftMax = Math.max(leftMax, height);
  }
  let rightMax = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i];
    const minHeight = Math.min(rightMax, maxes[i]);
    if (height < minHeight) {
      maxes[i] = minHeight - height;
    } else {
      maxes[i] = 0;
    }
    rightMax = Math.max(rightMax, height);
  }
  return maxes, reduce((a, b) => a + b, 0);
}
