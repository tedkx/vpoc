import React from 'react';
import PropTypes from 'prop-types';

const colorClassNames = ['blue', 'red', 'green', 'purple'];

const defaults = {
    colorClassName: colorClassNames[0],
    containerClassName: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    icon: ''
}

class Counter extends React.Component {
    render() {
        var value = this.props.value instanceof Date ? this.props.value.toLocaleDateString() : this.props.value;
        return (
            <div className={ this.props.containerClassName || defaults.containerClassName }>
                <a className={ 'dashboard-stat dashboard-stat-v2 ' + (this.props.colorClassName || defaults.colorClassName) } href="#">
                    <div className="visual">
                        <i className={ 'fa fa-' + this.props.icon } />
                    </div>
                    <div className="details">
                        <div className="number">
                            <span data-counter="counterup" data-value={ value }>{ value }</span>
                        </div>
                        <div className="desc"> { this.props.title } </div>
                    </div>
                </a>
            </div>
        );
    }
}

Counter.propTypes = {
    colorClassName: PropTypes.string,
    containerClassName: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
}

export default Counter;