const tail = require('../tail');
const { assert } = require('chai');

describe('#tail', () => {
  it("return '[]' for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("return '[1]' for []", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns ['Sweet', 'World'] for ['Hello', 'Sweet', 'World']", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});



// TEST CODE

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// // assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
// console.log(result);
// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(tail([]));
// console.log(tail(["Hello"]));
