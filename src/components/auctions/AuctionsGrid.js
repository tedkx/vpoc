import React from 'react';
import { AgGridReact } from 'ag-grid-react'

import Portlet from '../layout/Portlet'
import Helper from '../../lib/Helper'
import GridHelper from '../../lib/GridHelper'

let template = {
    id: 1,
    expiration: new Date(),
    brand: 'Suzuki',
    model: 'Swift',
    cc: '1300',
    fuel: 'gas',
    prefecture: 'Αττικής',
    registrationYear: '2004'
};

const rowHeight = 36;
const TypeCellRenderer = (params) => {
    let className = params.value == 'imitation' ? 'warning'
        : params.value == 'new' ? 'success'
        : 'danger';
    return <span className={ 'label label-' + className }>{ params.value }</span>;
}
const cellStyle = { padding: '7px' };

class AuctionsGrid extends React.Component {
    constructor(props) {
        super(props);

        this._columnDefs = [
            { headerName: 'A/A', valueGetter: (params) => params.node.rowIndex + 1, width: 25, cellClass: 'text-center', cellStyle: cellStyle },
            { headerName: 'Part No', field: 'partnumber', width: 150, cellStyle: cellStyle },
            { headerName: 'Τύπος', field: 'type', width: 60, cellRendererFramework: TypeCellRenderer, cellStyle: cellStyle },
            { headerName: 'Ποσότητα', field: 'quantity', width: 25, cellClass: ['text-center'], cellStyle: cellStyle },
            { headerName: 'Σύνολο', field: 'total', width: 35, cellClass: ['text-center'], cellStyle: cellStyle }
        ];
    }

    gridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;

        GridHelper.baseOnGridReady(params);
        
        if(Helper.isFunc(this.props.onGridReady))
            this.props.onGridReady(params);
    }

    gridSizeChanged() {
        if(this.api)
            this.api.sizeColumnsToFit();
    }

    render() {
        return (
            <Portlet title="Οι Δημοπρασιες μου" className="ag-blue ag-vdfm">
                <AgGridReact
                    onGridReady={ this.gridReady.bind(this) }
                    onGridSizeChanged={ this.gridSizeChanged.bind(this) }
                    
                    columnDefs={ this._columnDefs }
                    rowData={ this.props.data }

                    enableSorting={ true }
                    rowHeight={ 36 }
                    />
            </Portlet>
        );
    }
}

export default AuctionsGrid;