function main() {
    let algorithms = [MergeSort, HeapSort, QuickSort];

    let vis = new Visualizer('canvas', msPerInterval = 150);
    vis.setInvertYAxis(true);
    vis.setDrawBars(true);
    vis.initFromCellDimensions(15, 15, 3);
    vis.drawSortedData();
    vis.mountButtons(algorithms);
}

document.addEventListener('DOMContentLoaded', main);
