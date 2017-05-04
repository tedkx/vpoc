import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Counter from './Counter'
import MyAuctionsGrid from './MyAuctionsGrid'

class MerchantDashboard extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Counter colorClassName="blue" icon="comments" title="Ενεργές Δημοπρασίες" value={ this.props.auctionsCount } />
                    <Counter colorClassName="red" icon="bar-chart-o" title="Λήξη Επόμενης" value={ this.props.nextAuctionExpirationDate } />
                    <Counter colorClassName="green" icon="shopping-cart" title="Σύνολο" value={ this.props.amount } />
                    <Counter colorClassName="purple" icon="globe" title="Dummy Metric" value={ '85%' } />
                </div>

                <div style={ { float: 'none', minHeight: '2000px' } }>
                    <MyAuctionsGrid data={ this.props.myAuctions } />
                </div>
            </div>
        );
    }
}

MerchantDashboard.propTypes = {
    amount: PropTypes.number,
    auctionsCount: PropTypes.number,
    nextAuctionExpirationDate: PropTypes.any
}

const mapStateToProps = (state, ownProps) => {
    return {
        amount: state.app.dash_amount,
        auctionsCount: state.app.dash_auctionsCount,
        myAuctions: state.app.dash_myAuctions,
        nextAuctionExpirationDate: state.app.dash_nextAuctionExpirationDate
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantDashboard)