import React from 'react';
import { Redirect } from 'react-router-dom';

import { auctions } from '../../lib/FakeData';

import Portlet from '../layout/Portlet'

class Auction extends React.Component {
    constructor(props) {
        super(props);

        this._auction = auctions.find((a) => a.partnumber == props.match.params.id);
    }

    render() {
        if(!this._auction)
            return (
                <Redirect to={{
                    pathname: '/auctions',
                    state: { from: props.location }
                }}/>
            );
        
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
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={ { width: '75%', backgroundColor: '#36c6d3' } }>
                            <span className="sr-only"> 75% Complete (success) </span>
                        </div>
                    </div>
                </div>

                <Portlet icon="icon-settings" title={ 'Part No ' +  this._auction.partnumber + ' | ' + this._auction.expires.toLocaleString() }
                    actions={ portletActions }
                    >

                </Portlet>
            </div>
        );
    }
}

export default Auction;