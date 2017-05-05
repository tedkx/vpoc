import React                    from 'react';
import { Switch, Route }        from 'react-router-dom';

import Dashboard                from './dashboard/Dashboard';
import AuctionsList             from './auctions/AuctionsList';
import Auction                  from './auctions/Auction';

class Routing extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Dashboard }/>
                <Route exact path='/auctions' component={ AuctionsList }/>
                <Route exact path='/auctions/:id' component={ Auction }/>
            </Switch>
        );
    }
}

export default Routing;