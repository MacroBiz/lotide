const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1, arr.length);
};

module.exports = tail;