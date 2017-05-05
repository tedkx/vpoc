import React from 'react';
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react'

import Portlet from '../layout/Portlet'
import Helper from '../../lib/Helper'
import GridHelper from '../../lib/GridHelper'

import { auctions } from '../../lib/FakeData';

import gas from '../../static/img/gas.png';
import diesel from '../../static/img/diesel.png';
import lpg from '../../static/img/lpg.png';

const rowHeight = 36;
const TypeCellRenderer = (params) => {
    let className = params.value == 'imitation' ? 'warning'
        : params.value == 'new' ? 'success'
        : 'danger';
    return <span className={ 'label label-' + className }>{ params.value }</span>;
}
const FuelTypeCellRenderer = (params) => {
    return <img src={ params.value == 'gas' ? gas : params.value == 'diesel' ? diesel : lpg } />;
}
const cellStyle = { padding: '7px' },
    imageCellStyle = { padding: 0 };

class AuctionsList extends React.Component {
    constructor(props) {
        super(props);

        this._columnDefs = [
            { headerName: 'A/A', valueGetter: (params) => params.node.rowIndex + 1, width: 25, cellClass: 'text-center', cellStyle: cellStyle },
            { headerName: 'Μάρκα', field: 'brand', width: 40, cellStyle: cellStyle },
            { headerName: 'Καύσιμο', field: 'fuel', width: 30, cellRendererFramework: FuelTypeCellRenderer, cellStyle: imageCellStyle, cellClass: 'text-center' },
            { headerName: 'Part No', field: 'partnumber', width: 150, cellStyle: cellStyle },
            { headerName: 'Τύπος', field: 'type', width: 60, cellRendererFramework: TypeCellRenderer, cellStyle: cellStyle },
            { headerName: 'Ποσότητα', field: 'quantity', width: 25, cellClass: ['text-center'], cellStyle: cellStyle },
            { headerName: 'Σύνολο', field: 'total', width: 35, cellClass: ['text-center'], cellStyle: cellStyle },
            {
                headerName: '', width: 70, cellClass: ['text-center'], cellRendererFramework: (params) => {
                    return (
                        <div className="btn-group btn-group-circle">
                            <Link to={ '/auctions/' + params.data.partnumber } className="btn btn-outline green btn-sm">Προσφορά</Link> 
                            <Link to={ '/auctions/' + params.data.partnumber } className="btn btn-outline dark btn-sm">Περισσότερα</Link> 
                        </div>
                    );
                }
            }
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
            <Portlet title="Όλες οι Δημοπρασίες" className="ag-vdfm">
                <AgGridReact
                    onGridReady={ this.gridReady.bind(this) }
                    onGridSizeChanged={ this.gridSizeChanged.bind(this) }
                    
                    columnDefs={ this._columnDefs }
                    rowData={ auctions }

                    enableSorting={ true }
                    rowHeight={ 36 }
                    />
            </Portlet>
        );
    }
}

export default AuctionsList;