const middle = function(midArr) {
  let arrLength = midArr.length;
  if (arrLength < 3) {
    return [];
  }

  if (arrLength % 2 === 0) {
    let highMidIndex = (arrLength) / 2;
    let lowMidIndex = highMidIndex - 1;
    return [midArr[lowMidIndex], midArr[highMidIndex]];
  } else {
    let index = Math.floor(arrLength / 2);
    return [midArr[index]];
  }
};

module.exports = middle;

// The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
