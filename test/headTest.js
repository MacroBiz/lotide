const head = require('../head');
const assertEqual = require('../assertEqual');
const { assert } = require('chai');

// // Test Code
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Lighthouse", "Labs"]), "Hello");
// assertEqual(head([6,7]), 5);

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});