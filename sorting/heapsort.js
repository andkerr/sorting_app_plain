export function heapSort(vals, frames) {
  heapify(vals, frames);
  frames.push(JSON.parse(JSON.stringify(vals))); // deep copy

  for (let i = vals.length - 1; i >= 1; --i) {
    [vals[0], vals[i]] = [vals[i], vals[0]];
    siftDown(vals, 0, i, frames);
    frames.push(JSON.parse(JSON.stringify(vals))); // deep copy
  }
}

function left(idx) {
  return 2 * idx;
}

function right(idx) {
  return 2 * idx + 1;
}

function heapify(vals, frames) {
  for (let i = Math.floor(vals.length / 2); i >= 0; --i) {
    siftDown(vals, i, vals.length, frames);
  }
}

function siftDown(vals, idx, heapSize, frames) {
  var l = left(idx),
      r = right(idx),
      largest = -1;

  if ((l < heapSize) && (vals[l] > vals[idx])) {
    largest = l;
  }
  else {
    largest = idx;
  }

  if ((r < heapSize) && (vals[r] > vals[largest])) {
    largest = r;
  }

  if (largest != idx) {
    [vals[idx], vals[largest]] = [vals[largest], vals[idx]];
    siftDown(vals, largest, heapSize, frames);
  }
}
