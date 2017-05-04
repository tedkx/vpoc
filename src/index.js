import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider }     from 'react-redux';

import App      from './components/App';
import Store    from './store/Store';

ReactDOM.render(
    <Provider store={ Store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app-wrap')
);