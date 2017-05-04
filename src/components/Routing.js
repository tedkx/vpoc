import React                    from 'react';
import { Switch, Route }        from 'react-router-dom';

import Dashboard                from './dashboard/Dashboard';

class Routing extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Dashboard }/>
            </Switch>
        );
    }
}

export default Routing;