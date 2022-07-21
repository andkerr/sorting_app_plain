function main() {
    let grid = new Grid('canvas', 10, 10, 2);

    var intervalID = window.setInterval((algo) => {
        grid.drawYData(algo.step());

        if (algo.done()) {
            window.clearInterval(intervalID);
        }
    }, 100, new MergeSort(grid.nCols));
}

document.addEventListener('DOMContentLoaded', main);