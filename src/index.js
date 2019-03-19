/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let first;
  let second;
  let third;
  let count = 0;

  for (let i = 0; i < preferences.length; i++) {
    first = preferences[i];
    second = preferences[first-1];
    third = preferences[second-1];
    if (first !== second && second !== third && (third - 1) === i) {
      count++;
    }
  }

  return (count/3);
};
