function main() {
    algorithms = [MergeSort, HeapSort];

    let vis = new Visualizer('canvas');
    vis.setInvertYAxis(true);
    vis.initFromCellDimensions(10, 10, 2);
    vis.drawSortedData();
    vis.mountButtons(algorithms);
}

document.addEventListener('DOMContentLoaded', main);
