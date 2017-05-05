import React from 'react'
import PropTypes from 'prop-types'

import Helper from '../../lib/Helper'

/*
    Actions...

    <div className="actions">
        <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
            <i className="icon-cloud-upload"></i>
        </a>
        <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
            <i className="icon-wrench"></i>
        </a>
        <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
            <i className="icon-trash"></i>
        </a>
    </div>
*/

class Portlet extends React.Component {
    render() {
        return (
            <div className={ 'portlet light bordered ' + (Helper.isNullOrWhitespace(this.props.className) ? '' : this.props.className) } style={ this.props.style || {} }>
                <div className="portlet-title">
                    <div className="caption">
                        { 
                            Helper.isNullOrWhitespace(this.props.icon)
                                ? false
                                : <i className={ this.props.icon }></i>
                        }
                        <span className="caption-subject font-dark bold uppercase">{ this.props.title }</span>
                    </div>
                    {
                        Helper.isArray(this.props.actions) && this.props.actions.length > 0
                            ? <div className="actions">{ this.props.actions }</div>
                            : false
                    }
                </div>
                <div className="portlet-body">
                    { this.props.children }
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

Portlet.propTypes = {
    actions: PropTypes.array,
    className: PropTypes.string,
    icon: PropTypes.string, //simple-icon class
    style: PropTypes.object,
    title: PropTypes.string
}

export default Portlet;