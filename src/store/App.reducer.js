import { APP_ACTION_TYPES } from './App.actions';

import * as FakeData from '../lib/FakeData';

const users = [
    { firstName: 'Γιώργος', lastName: 'Παπαδόπουλος', role: 'merchant', accessToken: '1234' },
    { firstName: 'Κώστας', lastName: 'Παπαδάκης', role: 'insurance', accessToken: '2345' },
    { firstName: 'Νίκος', lastName: 'Παπαδούλης', role: 'admin', accessToken: '3456' }
]

export const defaultState = {
    authenticating: false,
    initialLoadComplete: false,
    loading: false,
    user: users[0],

    // DASHBOARD
    dash_amount: 1300,
    dash_auctions: [],
    dash_auctionsCount: 5302,
    dash_myAuctions: FakeData.myAuctions,
    dash_nextAuctionExpirationDate: FakeData.nextExpiringAuctionDate
}

const app = (state = defaultState, action) => {
    switch (action.type) {
        case APP_ACTION_TYPES.DEV_SWITCH_USER:
            var role = action.payload.role || action.payload || '';
            return Object.assign({}, state, { 
                user: users.find(u => u.role == role) || user[0] 
            });
        case APP_ACTION_TYPES.LOGIN_COMPLETE:
            return Object.assign({}, state, { authenticating: false, user: action.payload });
        case APP_ACTION_TYPES.LOGOUT:
            return Object.assign({}, state, { user: null });
        default:
            return state;
    }
}

export default app;