export function mergeSort(vals, lo, hi, frames) {
  if (lo == hi) {
    return;
  }
  else {
    const mid = Math.floor((lo + hi) / 2);
    mergeSort(vals, lo, mid, frames);
    mergeSort(vals, mid + 1, hi, frames);
    merge(vals, lo, mid, hi);

    frames.push(JSON.parse(JSON.stringify(vals))); // deep copy
  }
}

function merge(vals, lo, mid, hi) {
  var result = Array();
  var l_idx = lo,
      r_idx = mid + 1;

  var l_curr, r_curr;
  while ((l_idx <= mid) || (r_idx <= hi)) {
    if (l_idx <= mid) {
      l_curr = vals[l_idx];
    }
    else {
      l_curr = Infinity;
    }

    if (r_idx <= hi) {
      r_curr = vals[r_idx];
    }
    else {
      r_curr = Infinity;
    }

    if (l_curr <= r_curr) {
      result.push(l_curr);
      ++l_idx;
    }
    else {
      result.push(r_curr);
      ++r_idx;
    }
  }

  for (let i = 0; i < result.length; ++i) {
    vals[lo + i] = result[i];
  }
}
