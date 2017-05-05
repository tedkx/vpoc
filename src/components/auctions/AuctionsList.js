import React from 'react'
import { Link } from 'react-router-dom'
import { AgGridReact } from 'ag-grid-react'
import { Modal } from 'react-bootstrap'

import Portlet from '../layout/Portlet'
import Helper from '../../lib/Helper'
import GridHelper from '../../lib/GridHelper'

import { auctions } from '../../lib/FakeData'

import gas from '../../static/img/gas.png'
import diesel from '../../static/img/diesel.png'
import lpg from '../../static/img/lpg.png'

const rowHeight = 36;
const circleButtonStyle = { padding: '3px 6px', fontSize: '11px' };
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

        this.state = {
            showModal: false
        };

        this._columnDefs = [
            { headerName: 'A/A', valueGetter: (params) => params.node.rowIndex + 1, width: 25, cellClass: 'text-center', cellStyle: cellStyle },
            { headerName: 'Μάρκα', field: 'brand', width: 40, cellStyle: cellStyle },
            { headerName: 'Καύσιμο', field: 'fuel', width: 30, cellRendererFramework: FuelTypeCellRenderer, cellStyle: imageCellStyle, cellClass: 'text-center' },
            { headerName: 'Part No', field: 'partnumber', width: 110, cellStyle: cellStyle },
            { headerName: 'Τύπος', field: 'type', width: 60, cellRendererFramework: TypeCellRenderer, cellStyle: cellStyle },
            { headerName: 'Ποσότητα', field: 'quantity', width: 25, cellClass: ['text-center'], cellStyle: cellStyle },
            { headerName: 'Σύνολο', field: 'total', width: 55, cellClass: ['text-center'], cellStyle: cellStyle },
            {
                headerName: '', width: 90, cellClass: ['text-center'], cellRendererFramework: (params) => {
                    return (
                        <div className="btn-group btn-group-circle" style={ { whiteSpace: 'nowrap' } }>
                            <button type="button" onClick={ this.onOfferClick.bind(this) } style={ circleButtonStyle }
                                className="btn btn-outline green btn-sm">Προσφορά</button> 
                            <Link to={ '/auctions/' + params.data.partnumber } className="btn btn-outline dark btn-sm" style={ circleButtonStyle }>Περισσότερα</Link> 
                        </div>
                    );
                }
            }
        ];

        this.onModalHide = this.onModalHide.bind(this);
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

    onOfferClick() {
        this.setState({ showModal: true });
    }
    onModalHide() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
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

                <Modal animation={ true } className="fade-scale" show={ this.state.showModal }
                    onHide={ this.onModalHide } dialogClassName="custom-modal" style={ { top: '22%' } }>
                    <Modal.Header closeButton>
                        <Modal.Title>Προσφορά</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="mt-radio-inline">
                                <label className="mt-radio">
                                    <input type="radio" name="optionsRadios" id="optionsRadios25" value="option1"/> Καινούριο
                                    <span></span>
                                </label>
                                <label className="mt-radio">
                                    <input type="radio" name="optionsRadios" id="optionsRadios26" value="option2"/> Imitation
                                    <span></span>
                                </label>
                                <label className="mt-radio mt-radio-disabled">
                                    <input type="radio" name="optionsRadios" id="optionsRadios27" value="option3"/> Μεταχειρισμένο
                                    <span></span>
                                </label>
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="control-label col-xs-2">Ποσό</label>
                            <div className="col-xs-10">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="control-label col-xs-2">Σχόλια</label>
                            <div className="col-xs-10">
                                <textarea rows="4" className="form-control"/>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-default btn-sm pull-right" onClick={ this.onModalHide }>Ακύρωση</button>
                        <button type="button" className="btn btn-primary btn-sm pull-right" onClick={ this.onModalHide }>Καταχώρηση</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default AuctionsList;