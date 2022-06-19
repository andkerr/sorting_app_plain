export const sleep = ms => new Promise(r => setTimeout(r, ms));

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
// Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomPerm(elts) {
  var tmp, rand_idx;
  for (let i = 0; i < elts.length; ++i) {
    rand_idx = getRandomIntInclusive(i, elts.length - 1);
    tmp = elts[i];
    elts[i] = elts[rand_idx];
    elts[rand_idx] = tmp;
  }

  return elts;
}
