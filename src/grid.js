(function(global) {
  const ROWS = 32,
        COLS = 32;

  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");

  var width = Math.min(global.innerWidth, global.innerHeight) * 0.9;
  var height = width;

  cellWidth = Math.floor(width / COLS),
  cellHeight = Math.floor(height / ROWS);

  gutter = Math.ceil(0.1 * cellWidth);

  canvas.width = cellWidth * COLS + gutter;
  canvas.height = cellHeight * ROWS + gutter;

  context.fillStyle = "#cccccc"; // grey background
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#ffffff"; // default cell fill

  for (var i = 0; i < ROWS; ++i) {
    for (var j = 0; j < COLS; ++j) {
      context.save();
      context.translate(j * cellWidth, i * cellHeight);

      // drawing code
      context.fillRect(gutter, gutter, cellWidth - gutter, cellHeight - gutter);

      context.restore();
    }
  }
})(window);

// initialize a <canvas> element that displays an n x n grid
// export function gridInit(g) {
//   var canvas = document.getElementById("canvas"),
//       context = canvas.getContext("2d");
//
//   var width = Math.min(window.innerWidth, window.innerHeight) * 0.9;
//   var height = width;
//
//   g.cellWidth = Math.floor(width / g.cols),
//   g.cellHeight = Math.floor(height / g.rows);
//
//   g.gutter = Math.ceil(0.1 * g.cellWidth);
//
//   canvas.width = g.cellWidth * g.cols + g.gutter;
//   canvas.height = g.cellHeight * g.rows + g.gutter;
//
//   context.fillStyle = "#cccccc"; // grey background
//   context.fillRect(0, 0, canvas.width, canvas.height);
//   context.fillStyle = "#ffffff"; // default cell fill
//
//   for (var i = 0; i < g.rows; ++i) {
//     for (var j = 0; j < g.cols; ++j) {
//       context.save();
//       context.translate(j * g.cellWidth, i * g.cellHeight);
//
//       // drawing code
//       context.fillRect(g.gutter, g.gutter, g.cellWidth - g.gutter, g.cellHeight - g.gutter);
//
//       context.restore();
//     }
//   }
//
//   return g;
// }
//
// function gridClear(g) {
//   var canvas = document.getElementById("canvas"),
//       context = canvas.getContext("2d");
//
//   context.fillStyle = "#ffffff"; // default cell fill
//
//   for (var i = 0; i < g.rows; ++i) {
//     for (var j = 0; j < g.cols; ++j) {
//       context.save();
//       context.translate(j * g.cellWidth, i * g.cellHeight);
//
//       // drawing code
//       context.fillRect(g.gutter, g.gutter, g.cellWidth - g.gutter, g.cellHeight - g.gutter);
//
//       context.restore();
//     }
//   }
// }
//
// export function drawCells(g, vals) {
//   gridClear(g);
//
//   var canvas = document.getElementById("canvas"),
//       context = canvas.getContext("2d");
//
//   context.fillStyle = "#cc8800";
//
//   for (let i = 0; i < vals.length; ++i) {
//     context.save();
//     context.translate(i * g.cellWidth, (g.rows - vals[i] - 1) * g.cellHeight);
//
//     context.fillRect(g.gutter, g.gutter, g.cellWidth - g.gutter, g.cellHeight - g.gutter);
//
//     context.restore();
//   }
// }
