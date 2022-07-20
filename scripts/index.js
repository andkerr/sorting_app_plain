function main() {
    let grid = new Grid('canvas', 30, 30, 4);
    let data = [...Array(grid.nCols).keys()];
    for (let i = 0; i < data.length; ++i) {
        grid.fillCell(i, data[i]);
    }
}

document.addEventListener('DOMContentLoaded', main);