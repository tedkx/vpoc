import React from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
        var borderStyle = { border: '1px solid #3d4957', padding: '10px 15px', fontSize: '14px', color: '#b4bcc8' },
            inputStyle = { display: 'block', marginTop: '3px' }
        return (
            <div className="page-sidebar-wrapper">
                    <div className="page-sidebar navbar-collapse collapse">
                        <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style={ { paddingTop: '20px' } }>
                            <li className="sidebar-toggler-wrapper hide">
                                <div className="sidebar-toggler">
                                    <span></span>
                                </div>
                            </li>
                            <li className="sidebar-search-wrapper">
                                <form className="sidebar-search  " action="http://keenthemes.com/preview/metronic/theme/admin_1/page_general_search_3.html" method="POST">
                                    <a href="javascript:;" className="remove">
                                        <i className="icon-close"></i>
                                    </a>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Αναζήτηση..."/>
                                        <span className="input-group-btn">
                                            <a href="javascript:;" className="btn submit">
                                                <i className="icon-magnifier"></i>
                                            </a>
                                        </span>
                                    </div>
                                </form>
                            </li>
                            <li className={ 'nav-item ' + (this.props.currentRoute == '/' ? 'active' : '' ) }>
                                <Link to="/" className="nav-link nav-toggle">
                                    <i className="icon-puzzle"></i>
                                    <span className="title">Επισκόπηση</span>
                                </Link>
                            </li>
                            <li className={ 'nav-item ' + (this.props.currentRoute == '/auctions' ? 'active' : '' ) }>
                                <Link to="/auctions" className="nav-link nav-toggle">
                                    <i className="icon-puzzle"></i>
                                    <span className="title">Δημοπρασίες</span>
                                </Link>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-settings"></i>
                                    <span className="title">Μενού 2</span>
                                    <span className="arrow"></span>
                                </a>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-bulb"></i>
                                    <span className="title">Μενού 3</span>
                                    <span className="arrow"></span>
                                </a>
                            </li>
                            <li className="nav-item  ">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i className="icon-pointer"></i>
                                    <span className="title">Με Υπο-μεού</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item  ">
                                        <a href="http://keenthemes.com/preview/metronic/theme/admin_1/maps_google.html" className="nav-link ">
                                            <span className="title">Google Maps</span>
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a href="http://keenthemes.com/preview/metronic/theme/admin_1/maps_vector.html" className="nav-link ">
                                            <span className="title">Vector Maps</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="heading">
                                <h3 className="uppercase">Φίλτρα</h3>
                            </li>
                            <li className="nav-item  " style={ borderStyle }>
                                <i className="icon-user"></i>
                                <span className="title">Part No</span>
                                <input type="text" className="input-sm form-control" style={ inputStyle } />
                            </li>
                            <li className="nav-item  " style={ borderStyle }>
                                <div className="mt-checkbox-list">
                                    <label className="mt-checkbox mt-checkbox-outline">
                                        <input type="checkbox"/> Καινούρια
                                        <span></span>
                                    </label>
                                    <br />
                                    <label className="mt-checkbox mt-checkbox-outline">
                                        <input type="checkbox"/> Imitation
                                        <span></span>
                                    </label>
                                    <br />
                                    <label className="mt-checkbox mt-checkbox-outline">
                                        <input type="checkbox" /> Μεταχειρισμένα
                                        <span></span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default Sidebar;