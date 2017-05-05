import React from 'react';
import { AgGridReact } from 'ag-grid-react'
import { Modal }            from 'react-bootstrap';

import Portlet from '../layout/Portlet'
import Helper from '../../lib/Helper'
import GridHelper from '../../lib/GridHelper'

const rowHeight = 36;
const TypeCellRenderer = (params) => {
    let className = params.value == 'imitation' ? 'warning'
        : params.value == 'new' ? 'success'
        : 'danger';
    return <span className={ 'label label-' + className }>{ params.value }</span>;
}
const cellStyle = { padding: '7px' };

const data = [
    { amount: 1500, date: new Date('2017-05-05 13:00:00'), type: 'imitation' },
    { amount: 200, date: new Date('2017-05-05 12:30:00'), type: 'imitation' },
    { amount: 300, date: new Date('2017-05-05 11:45:00'), type: 'new' },
    { amount: 40, date: new Date('2017-05-05 10:00:00'), type: 'used' },
    { amount: 800, date: new Date('2017-05-05 13:00:00'), type: 'imitation' },
    { amount: 123, date: new Date('2017-05-05 13:00:00'), type: 'imitation' },
    { amount: 542, date: new Date('2017-05-05 13:00:00'), type: 'imitation' },
    { amount: 456, date: new Date('2017-05-05 13:00:00'), type: 'imitation' },
    { amount: 193, date: new Date('2017-05-05 13:00:00'), type: 'new' }
]

class AuctionHistoryGrid extends React.Component {
    constructor(props) {
        super(props);

        this._columnDefs = [
            { headerName: 'A/A', valueGetter: (params) => params.node.rowIndex + 1, width: 25, cellClass: 'text-center', cellStyle: cellStyle },
            { headerName: 'Ποσό', field: 'amount', width: 130, cellStyle: cellStyle },
            { headerName: 'Τύπος', field: 'type', width: 60, cellRendererFramework: TypeCellRenderer, cellStyle: cellStyle },
            { headerName: 'Ημερομηνία', width: 70, cellClass: ['text-center'], cellStyle: cellStyle, valueGetter: (params) => {
                return params.data.date.toLocaleString();
            } },
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
            <div className="ag-blue ag-vdfm">
                <AgGridReact
                    onGridReady={ this.gridReady.bind(this) }
                    onGridSizeChanged={ this.gridSizeChanged.bind(this) }
                    
                    columnDefs={ this._columnDefs }
                    rowData={ data }

                    enableSorting={ true }
                    rowHeight={ 36 }
                    />
            </div>
        );
    }
}

export default AuctionHistoryGrid;