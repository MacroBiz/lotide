const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // this will check every element in the arr to check if it is the same and return false if not.
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}.`);
  }
};

const without = function(orig, notWanted) {
  let withoutArr =  orig.filter(el => {
    return !notWanted.includes(el);
  });

  return withoutArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);  // match without result with second arr2.
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]