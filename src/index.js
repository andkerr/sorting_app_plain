function main() {
    let grid = new Grid('canvas', 30, 30, 4);
    let data = [...Array(grid.nCols).keys()];
    for (let i = 0; i < data.length; ++i) {
        grid.fillCell(i, data[i]);
    }
}

document.addEventListener('DOMContentLoaded', main);

// import { drawCells, gridInit } from "./grid.js";
// import { animate, randomPerm } from "./helpers.js";
// import { mergeSort } from "./sorting/mergesort.js";
// import { heapSort } from "./sorting/heapsort.js";
//
// const N_ROWS = 32;
// const N_COLS = 32;
//
// const buttons = [
//   {
//     text: 'Scramble',
//     onClick: handleScramble,
//     DOMElement: undefined,
//   },
//   {
//     text: 'Merge Sort',
//     onClick: handleMergeSort,
//     DOMElement: undefined,
//   },
//   {
//     text: 'Heap Sort',
//     onClick: handleHeapSort,
//     DOMElement: undefined,
//   }
// ]
//
// var g = {
//   rows: N_ROWS,
//   cols: N_COLS,
//   cellWidth: undefined,
//   cellHeight: undefined,
//   gutter: undefined
// };
//
// var vals = [...Array(g.rows).keys()];
//
// // Should I prefer an explicit main() fuction over this??
// document.addEventListener('DOMContentLoaded', () => {
//   g = gridInit(g);
//   drawCells(g, vals);
//   initButtons();
//
//   console.log(g);
// });
//
// function initButtons() {
//   const btnContainer = document.getElementById('button-container');
//   buttons.forEach((btn) => {
//     let btnElt = document.createElement('button');
//     btnElt.innerHTML = btn.text;
//     btnElt.addEventListener('click', btn.onClick);
//     btnContainer.appendChild(btnElt);
//     btn.DOMElement = btnElt;
//   });
// }
//
// function toggleButtonsDisabled() {
//   buttons.forEach((btn) => {
//     btn.DOMElement.disabled = !btn.DOMElement.disabled;
//   });
// }
//
// function handleScramble() {
//   toggleButtonsDisabled();
//
//   vals = randomPerm(vals);
//   drawCells(g, vals);
//
//   toggleButtonsDisabled();
// }
//
// function handleMergeSort() {
//   toggleButtonsDisabled();
//
//   var frames = Array();
//   mergeSort(vals, 0, vals.length - 1, frames);
//   animate(g, frames).then(() => {
//     toggleButtonsDisabled();
//   });
// }
//
// function handleHeapSort() {
//   toggleButtonsDisabled();
//
//   var frames = Array();
//   heapSort(vals, frames);
//   console.log(frames.length);
//   animate(g, frames).then(() => {
//     toggleButtonsDisabled();
//   });
// }
