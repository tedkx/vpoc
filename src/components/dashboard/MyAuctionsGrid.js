import React from 'react';
import { AgGridReact } from 'ag-grid-react'

import Helper from '../../lib/Helper'

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



class MyAuctionsGrid extends React.Component {
    constructor(props) {
        super(props);

        this._columnDefs = [
            { headerName: 'Part No', field: 'partnumber' },
            { headerName: 'Τύπος', field: 'type', width: 150, cellRenderer: (params) => {
                var className = params.value == 'imitation' ? 'warning'
                    : params.value == 'new' ? 'success'
                    : 'danger';
                return <span className={ 'label label-' + className }>{ params.value }</span>;
            } },
            { headerName: 'Ποσότητα', field: 'quantity', width: 70 },
            { headerName: 'Σύνολο', field: 'total', width: 100 }
        ];
    }

    gridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        this.api.sizeColumnsToFit();

        if(Helper.isFunc(this.props.onGridReady))
            this.props.onGridReady(params);
    }
    
    render() {
        return (
            <div className="ag-blue ag-vdfm">
                <AgGridReact
                    onGridReady={ this.gridReady.bind(this) }
                    
                    columnDefs={ this._columnDefs }
                    rowData={ this.props.data }

                    enableSorting={ true }
                    rowHeight={ 26 }
                    />
            </div>
        );
    }
}

export default MyAuctionsGrid;