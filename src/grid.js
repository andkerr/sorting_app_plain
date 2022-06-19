// initialize a <canvas> element that displays an n x n grid
export function gridInit(g) {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");

  var width = Math.min(window.innerWidth, window.innerHeight) * 0.75;
  var height = width;

  g.cellWidth = width / g.cols,
  g.cellHeight = height / g.rows;

  g.gutter = Math.ceil(0.1 * g.cellWidth);

  canvas.width = Math.ceil(width + g.gutter);
  canvas.height = Math.ceil(height + g.gutter);

  context.fillStyle = "#cccccc"; // grey background
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#ffffff"; // default cell fill

  for (var i = 0; i < g.rows; ++i) {
    for (var j = 0; j < g.cols; ++j) {
      context.save();
      context.translate(j * g.cellWidth, i * g.cellHeight);

      // drawing code
      context.fillRect(g.gutter, g.gutter, g.cellWidth - g.gutter, g.cellHeight - g.gutter);

      context.restore();
    }
  }

  return g;
}

function gridClear(g) {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");

  context.fillStyle = "#ffffff"; // default cell fill

  for (var i = 0; i < g.rows; ++i) {
    for (var j = 0; j < g.cols; ++j) {
      context.save();
      context.translate(j * g.cellWidth, i * g.cellHeight);

      // drawing code
      context.fillRect(g.gutter, g.gutter, g.cellWidth - g.gutter, g.cellHeight - g.gutter);

      context.restore();
    }
  }
}

export function drawCells(g, vals) {
  gridClear(g);

  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");

  context.fillStyle = "#cc8800";

  for (let i = 0; i < vals.length; ++i) {
    context.save();
    context.translate(i * g.cellWidth, vals[i] * g.cellHeight);

    context.fillRect(g.gutter, g.gutter, g.cellWidth - g.gutter, g.cellHeight - g.gutter);

    context.restore();
  }
}
