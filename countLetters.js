const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
  }
};
// LHL
// ['L', 'H', 'L']
// { L: 1}
// { L: 1, H: 1}
// { L: 2, H: 1}
const countLetters = function(origStr) {
  let arrStr = origStr.split("");

  let letters = {};

  arrStr.forEach(letter => {
    if (letters[letter]) {
      letters[letter]++;
    } else {
      letters[letter] = 1;
    }
  });

  return letters;
};

let testStr = "programming";

console.log(countLetters(testStr));
