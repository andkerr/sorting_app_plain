import { drawCells, gridInit } from "./grid.js";
import { randomPerm, sleep } from "./helpers.js";
import { mergeSort } from "./mergesort.js";

const N_ROWS = 30;
const N_COLS = 30;

document.addEventListener('DOMContentLoaded', () => {
  var g = {
    rows: N_ROWS,
    cols: N_COLS,
    cellWidth: undefined,
    cellHeight: undefined,
    gutter: undefined
  };

  g = gridInit(g);

  const vals = Array(g.rows);
  for (let i = 0; i < vals.length; ++i) {
    vals[i] = i;
  }

  drawCells(g, randomPerm(vals));
});
