import { drawCells, gridInit } from "./grid.js";
import { animate, randomPerm } from "./helpers.js";
import { mergeSort } from "./sorting/mergesort.js";

const N_ROWS = 32;
const N_COLS = 32;

document.addEventListener('DOMContentLoaded', () => {
  var g = {
    rows: N_ROWS,
    cols: N_COLS,
    cellWidth: undefined,
    cellHeight: undefined,
    gutter: undefined
  };

  g = gridInit(g);
  var vals = Array(g.rows);
  for (let i = 0; i < vals.length; ++i) {
    vals[i] = i;
  }
  drawCells(g, vals);

  const scrambleBtn = document.getElementById('scramble-btn');
  scrambleBtn.addEventListener('click', (e) => handleScramble(g, vals));

  const sortBtn = document.getElementById('sort-btn');
  sortBtn.addEventListener('click', (e) => handleSort(g, vals));
});

function handleScramble(g, vals) {
  vals = randomPerm(vals);
  drawCells(g, vals);
}

function handleSort(g, vals) {
  const scrambleBtn = document.getElementById('scramble-btn');
  const sortBtn = document.getElementById('sort-btn');

  scrambleBtn.disabled = true;
  sortBtn.disabled = true;

  var frames = Array();
  mergeSort(vals, 0, vals.length - 1, frames);
  animate(g, frames).then(() => {
    scrambleBtn.disabled = false;
    sortBtn.disabled = false;
  });
}
