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

// // The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
// // For arrays with one or two elements, there is no middle. Return an empty array.
// middle([1]) // => []
// middle([1, 2]) // => []
// // For arrays with odd number of elements, an array containing a single middle element should be returned.
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]