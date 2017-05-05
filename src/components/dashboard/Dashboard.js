import React                from 'react';
import { connect }          from 'react-redux';

import MerchantDashboard    from './MerchantDashboard';
import InsuranceDashboard   from './InsuranceDashboard';
import AdminDashboard       from './AdminDashboard';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h1 className="page-title"> Admin Dashboard</h1>
                {
                    this.props.user.role === 'merchant' ? <MerchantDashboard />
                        : this.props.user.role === 'insurance' ? <InsuranceDashboard />
                        : this.props.user.role === 'admin' ? <AdminDashboard />
                        : false
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.app.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);