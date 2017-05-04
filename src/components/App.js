import React    from 'react';

import Header   from './layout/Header';
import Footer   from './layout/Footer';

import Routing  from './Routing';

class App extends React.Component {
    render() {
        return (
            <div className="page-wrapper">
                <Header />

                <div className="clearfix" />

                <div className="page-container">
                    ...

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

export default App;