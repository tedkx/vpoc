const GridHelper = {
    baseOnGridReady: (params, maxVisibleRows) => {
        let rowHeight = params.api.gridOptionsWrapper.gridOptions.rowHeight,
            headerHeight = 26,
            scrollbarHeight = 6,
            visibleRowsCount = typeof maxVisibleRows === 'number' && maxVisibleRows > 0 && params.api.rowModel.rowsToDisplay.length > maxVisibleRows
                ? maxVisibleRows
                : params.api.rowModel.rowsToDisplay.length;

        params.api.gridCore.eGridDiv.style.height = (scrollbarHeight + headerHeight + rowHeight * visibleRowsCount) + 'px';

        setTimeout(() => params.api.sizeColumnsToFit(), 150);
    }
}

export default GridHelper;