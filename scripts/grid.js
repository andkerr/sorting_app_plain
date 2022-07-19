class Grid {
  #canvasElt;
  #cellWidth;
  #cellHeight;
  #gridWidth;
  #gridHeight;
  #gutter;
  #nCols;
  #nRows;

  constructor(canvasEltId, cellWidth, cellHeight, gutter) {
    this.#canvasElt = document.getElementById(canvasEltId);
    this.#cellWidth = cellWidth;
    this.#cellHeight = cellHeight;
    this.#gutter = gutter;

    this.#nCols = Math.floor((this.#canvasElt.width - this.#gutter) / (this.#cellWidth + this.#gutter));
    this.#nRows = Math.floor((this.#canvasElt.height - this.#gutter) / (this.#cellHeight + this.#gutter));
  
    this.#gridWidth = this.#nCols * (this.#cellWidth + this.#gutter) + this.#gutter;
    this.#gridHeight = this.#nRows * (this.#cellHeight + this.#gutter) + this.#gutter;

    let extraX = this.#canvasElt.width - this.#gridWidth;
    let extraY = this.#canvasElt.height - this.#gridHeight;
    console.log(`extraX: ${extraX}, extraY: ${extraY}`);
    
    // center the grid in the excess horizontal and vertical space
    let context = this.#canvasElt.getContext('2d');
    context.translate(Math.floor(extraX / 2), Math.floor(extraY / 2));
  
    this.clearGrid(); // to start, render an empty grid
  }

  get nCols() {
    return this.#nCols;
  }

  get nRows() {
    return this.#nRows;
  }

  clearGrid() {
    let context = this.#canvasElt.getContext('2d');

    context.fillStyle = '#cccccc';
    context.fillRect(0, 0, this.#gridWidth, this.#gridHeight);

    context.fillStyle = '#ffffff';
    for (let i = 0; i < this.#nCols; ++i) {
      for (let j = 0; j < this.#nRows; ++j) {
        context.save();

        context.translate(i * (this.#cellWidth + this.#gutter) + this.#gutter,
                          j * (this.#cellHeight + this.#gutter) + this.#gutter);
        context.fillRect(0, 0, this.#cellWidth, this.#cellHeight);

        context.restore();
      }
    }
  }

  fillCell(i, j, color = '#cc8800') {
    let context = this.#canvasElt.getContext('2d');
    context.fillStyle = color;
    context.save();

    context.translate(i * (this.#cellWidth + this.#gutter) + this.#gutter,
                      j * (this.#cellHeight + this.#gutter) + this.#gutter);
    context.fillRect(0, 0, this.#cellWidth, this.#cellHeight);

    context.restore();
  }

  clearCell(i, j) {
    this.fillCell(i, j, '#ffffff');
  }
}