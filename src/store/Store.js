import { combineReducers, createStore } from 'redux';

import AppReducer, { defaultState as AppDefaults } from './App.reducer';

const rootReducer = combineReducers({
    app: AppReducer
});

const defaultState = {
    app: AppDefaults
};

const Store = typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
    ? createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
    : createStore(rootReducer, defaultState);
export default Store;