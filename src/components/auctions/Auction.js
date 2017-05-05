import React from 'react'
import { Redirect } from 'react-router-dom'
import { Tabs, Tab } from 'react-bootstrap'

import { auctions } from '../../lib/FakeData'

import Portlet from '../layout/Portlet'
import AuctionHistoryGrid from './AuctionHistoryGrid'

const auctionData = {
    brand: 'Suzuki',
    model: 'Swift',
    year: '2010',
    cc: '1300',
    fuelType: 'Βενζίνη'
}

class Auction extends React.Component {
    constructor(props) {
        super(props);

        this._auction = auctions.find((a) => a.partnumber == props.match.params.id);
    }

    renderDetail() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="well">
                            <div className="portlet-body">
                                <div className="row static-info">
                                    <div className="col-md-5 name"> Μάρκα: </div>
                                    <div className="col-md-7 value"> { auctionData.brand } </div>
                                </div>
                                <div className="row static-info">
                                    <div className="col-md-5 name"> Μοντέλο: </div>
                                    <div className="col-md-7 value"> { auctionData.model } </div>
                                </div>
                                <div className="row static-info">
                                    <div className="col-md-5 name"> Έτος Κυκλοφορίας: </div>
                                    <div className="col-md-7 value"> { auctionData.year } </div>
                                </div>
                                <div className="row static-info">
                                    <div className="col-md-5 name"> Τύπος Κινητήρα: </div>
                                    <div className="col-md-7 value"> { auctionData.fuelType } </div>
                                </div>
                                <div className="row static-info">
                                    <div className="col-md-5 name"> Κυβικά: </div>
                                    <div className="col-md-7 value"> { auctionData.cc } </div>
                                </div>
                                <div className="row static-info">
                                    <div className="col-md-5 name"> Part No: </div>
                                    <div className="col-md-7 value"> { this._auction.partnumber } </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pricing-content-1">
                    <div className="col-md-4">
                        <div className="price-column-container border-active">
                            <div className="price-table-head bg-blue">
                                <h2 className="no-margin">Καινούριο</h2>
                            </div>
                            <div className="arrow-down border-top-blue"></div>
                            <div className="price-table-pricing">
                                <h3>
                                    <sup className="price-sign">€</sup>780
                                </h3>
                            </div>
                            <div className="price-table-footer">
                                <button type="button" className="btn grey-salsa btn-outline sbold uppercase price-button">Νέα Προσφορά</button>
                                <button type="button" className="btn grey-salsa btn-outline sbold uppercase price-button">Ακύρωση</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="price-column-container border-active">
                            <div className="price-table-head bg-yellow">
                                <h2 className="no-margin">Imitation</h2>
                            </div>
                            <div className="arrow-down border-top-blue"></div>
                            <div className="price-table-pricing">
                                <h3>
                                    <sup className="price-sign">€</sup>500
                                </h3>
                            </div>
                            <div className="price-table-footer">
                                <button type="button" className="btn grey-salsa btn-outline sbold uppercase price-button">Νέα Προσφορά</button>
                                <button type="button" className="btn grey-salsa btn-outline sbold uppercase price-button">Ακύρωση</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="price-column-container border-active">
                            <div className="price-table-head bg-red">
                                <h2 className="no-margin">Μεταχειρισμένο</h2>
                            </div>
                            <div className="arrow-down border-top-blue"></div>
                            <div className="price-table-pricing">
                                <h3>
                                    <sup className="price-sign">€</sup>450
                                </h3>
                            </div>
                            <div className="price-table-footer">
                                <button type="button" className="btn grey-salsa btn-outline sbold uppercase price-button">Νέα Προσφορά</button>
                                <button type="button" className="btn grey-salsa btn-outline sbold uppercase price-button">Ακύρωση</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderHistory() {
        return <AuctionHistoryGrid />
    }

    render() {
        if(!this._auction)
            return (
                <Redirect to={{
                    pathname: '/auctions',
                    state: { from: this.props.location }
                }}/>
            );
        
        //let bidTypeCount = 
        
        let portletActions = [
                <div className="btn-group btn-group-devided" data-toggle="buttons" key="action-group-1">
                    <label className="btn btn-transparent green btn-outline btn-circle btn-sm active">
                        <input type="radio" name="options" className="toggle" id="option1"/>
                        Actions
                    </label>
                    <label className="btn btn-transparent blue btn-outline btn-circle btn-sm">
                        <input type="radio" name="options" className="toggle" id="option2"/>
                        Settings
                    </label>
                </div>,
                <div className="btn-group" key="action-group-2">
                    <a className="btn red btn-outline btn-circle" href="javascript:;" data-toggle="dropdown">
                        <i className="fa fa-share"></i>
                        <span className="hidden-xs"> Tools </span>
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu pull-right">
                        <li>
                            <a href="javascript:;"> Export to Excel </a>
                        </li>
                        <li>
                            <a href="javascript:;"> Export to CSV </a>
                        </li>
                        <li>
                            <a href="javascript:;"> Export to XML </a>
                        </li>
                        <li className="divider"> </li>
                        <li>
                            <a href="javascript:;"> Print Invoices </a>
                        </li>
                    </ul>
                </div>];

        return (
            <div className="auction-wrap">
                <div className="note note-info">
                    <p> Η δημοπρασία λήγει σε 5 ώρες </p>
                    <div className="progress progress-striped">
                        <div className="progress-bar progress-bar-success active" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={ { width: '75%', backgroundColor: '#36c6d3' } }>
                            <span className="sr-only"> 75% Complete (success) </span>
                        </div>
                    </div>
                </div>

                <Portlet icon="icon-settings" title={ 'Part No ' +  this._auction.partnumber + ' | ' + this._auction.expires.toLocaleString() }
                    actions={ portletActions }>
                    <Tabs defaultActiveKey={ 1 } id="kafrila" className="tabbable-line">
                        <Tab eventKey={ 1 } title="Γενικά">
                            { this.renderDetail.bind(this)() }
                        </Tab>
                        <Tab eventKey={ 2 } title="Ιστορικό">
                            { this.renderHistory.bind(this)() }
                        </Tab>
                    </Tabs>

                    <div className="row">
                        
                    </div>

                </Portlet>
            </div>
        );
    }
}

export default Auction;