const middle = require('../middle');
const { assert } = require('chai');

describe('#middle', () => {
  it("return '[]' for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("return '[]' for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns ['hello2'] for ['hello1', 'hello2', 'hello3']", () => {
    assert.deepEqual(middle(['hello1', 'hello2', 'hello3']), ['hello2']);
  });
  it("returns ['hello2', 'hello3'] for ['hello1', 'hello2', 'hello3', 'hello4']", () => {
    assert.deepEqual(middle(['hello1', 'hello2', 'hello3', 'hello4']), ['hello2', 'hello3']);
  });
});



// // The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

// // TEST CODE

// // For arrays with one or two elements, there is no middle. Return an empty array.
// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []
// // For arrays with odd number of elements, an array containing a single middle element should be returned.
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]