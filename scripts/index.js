function main() {
    algorithms = [MergeSort, HeapSort, QuickSort];

    let vis = new Visualizer('canvas', msPerInterval = 200);
    vis.setInvertYAxis(true);
    vis.initFromCellDimensions(10, 10, 2);
    vis.drawSortedData();
    vis.mountButtons(algorithms);
}

document.addEventListener('DOMContentLoaded', main);
