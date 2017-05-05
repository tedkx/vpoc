import React    from 'react';

import Header   from './layout/Header';
import Footer   from './layout/Footer';
import Sidebar  from './layout/Sidebar';

import Routing  from './Routing';

class App extends React.Component {
    render() {
        return (
            <div className="page-wrapper">
                <Header />

                <div className="clearfix" />

                <div className="page-container">
                    <Sidebar currentRoute={ this.context.router.route.location.pathname }/>

                    <div className="page-content-wrapper">
                        <div className="page-content">
                            <Routing />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object
};

export default App;