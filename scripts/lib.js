/* Helpers */

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
// Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomPerm(elts) {
  let tmp, rand_idx;
  for (let i = 0; i < elts.length; ++i) {
    rand_idx = getRandomIntInclusive(i, elts.length - 1);
    tmp = elts[i];
    elts[i] = elts[rand_idx];
    elts[rand_idx] = tmp;
  }

  return elts;
}

function deepCopy(x) {
  return JSON.parse(JSON.stringify(x));
}

/* Sorting Algorithms */

class MergeSort {
  constructor(n) {
    this.#data = randomPerm([...Array(n).keys()]);
    this.#steps = [deepCopy(this.#data)];
    this.#stepCounter = 0;
  }

  /* Public Methods */

  step() {
    if (this.#steps.length == 1) {
      this.#sortAndComputeSteps(0, this.#data.length - 1);
    }
    let currentStep = deepCopy(this.#steps[this.#stepCounter]);
    ++this.#stepCounter;
    return currentStep;
  }

  done() {
    return this.#stepCounter == this.#steps.length;
  }

  /* Private Variables */
  
  #data;
  #steps;
  #stepCounter;

  /* Private Methods */

  #mergeAndUpdateSteps(lo, mid, hi) {
    var buffer = Array();
    var l_idx = lo,
        r_idx = mid + 1;

    var l_curr, r_curr;
    while ((l_idx <= mid) || (r_idx <= hi)) {
      if (l_idx <= mid) {
        l_curr = this.#data[l_idx];
      }
      else {
        l_curr = Infinity;
      }

      if (r_idx <= hi) {
        r_curr = this.#data[r_idx];
      }
      else {
        r_curr = Infinity;
      }

      if (l_curr <= r_curr) {
        buffer.push(l_curr);
        ++l_idx;
      }
      else {
        buffer.push(r_curr);
        ++r_idx;
      }
    }

    for (let i = 0; i < buffer.length; ++i) {
      if (this.#data[lo + i] != buffer[i]) {
        this.#data[lo + i] = buffer[i];
        this.#steps.push(deepCopy(this.#data));
      }
    }
  }

  #sortAndComputeSteps(lo, hi) {
    if (lo == hi) {
      return;
    }

    let mid = Math.floor((lo + hi) / 2);
    this.#sortAndComputeSteps(lo, mid);
    this.#sortAndComputeSteps(mid + 1, hi);
    this.#mergeAndUpdateSteps(lo, mid, hi);
  }
}