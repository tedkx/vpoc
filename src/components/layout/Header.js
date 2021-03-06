import React from 'react';

import logo from '../../static/img/logo.png';

class Header extends React.Component {
    render() {
        return (
            <div className="page-header navbar navbar-fixed-top">
                <div className="page-header-inner ">
                    <div className="page-logo">
                        <a href="http://keenthemes.com/preview/metronic/theme/admin_1/index.html">
                            <img src={ logo } alt="logo" className="logo-default"/> 
                        </a>
                        <div className="menu-toggler sidebar-toggler">
                            <span></span>
                        </div>
                    </div>
                    <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                        <span></span>
                    </a>
                    <div className="top-menu">
                        <ul className="nav navbar-nav pull-right">
                            <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-expanded="false">
                                    <i className="icon-bell"></i>
                                    <span className="badge badge-default"> 7 </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="external">
                                        <h3>
                                            <span className="bold">12 pending</span> notifications</h3>
                                        <a href="http://keenthemes.com/preview/metronic/theme/admin_1/page_user_profile_1.html">view all</a>
                                    </li>
                                    <li>
                                        <div className="slimScrollDiv" style={ { position: 'relative', overflow: 'hidden', width: 'auto', height: '250px' } }>
                                            <ul className="dropdown-menu-list scroller" style={ { height: '250px', overflow: 'hidden', width: 'auto'} } data-handle-color="#637283" data-initialized="1">
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">just now</span>
                                                        <span className="details">
                                                            <span className="label label-sm label-icon label-success">
                                                                <i className="fa fa-plus"></i>
                                                            </span> New user registered. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">3 mins</span>
                                                        <span className="details">
                                                            <span className="label label-sm label-icon label-danger">
                                                                <i className="fa fa-bolt"></i>
                                                            </span> Server #12 overloaded. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">10 mins</span>
                                                        <span className="details">
                                                            <span className="label label-sm label-icon label-warning">
                                                                <i className="fa fa-bell-o"></i>
                                                            </span> Server #2 not responding. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">14 hrs</span>
                                                        <span className="details">
                                                            <span className="label label-sm label-icon label-info">
                                                                <i className="fa fa-bullhorn"></i>
                                                            </span> Application error. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">2 days</span>
                                                        <span className="details">
                                                            <span className="label label-sm label-icon label-danger">
                                                                <i className="fa fa-bolt"></i>
                                                            </span> Database overloaded 68%. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">3 days</span>
                                                        <span className="details">
                                                            <span className="label label-sm label-icon label-danger">
                                                                <i className="fa fa-bolt"></i>
                                                            </span> A user IP blocked. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">4 days</span>
                                                        <span className="details">
                                                            <span className="label label-sm label-icon label-warning">
                                                                <i className="fa fa-bell-o"></i>
                                                            </span> Storage Server #4 not responding dfdfdfd. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">5 days</span>
                                                        <span className="details">
                                                            <span className="label label-sm label-icon label-info">
                                                                <i className="fa fa-bullhorn"></i>
                                                            </span> System Error. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">9 days</span>
                                                        <span className="details">
                                                            <span className="label label-sm label-icon label-danger">
                                                                <i className="fa fa-bolt"></i>
                                                            </span> Storage server failed. </span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="slimScrollBar" style={ { background: 'rgb(99, 114, 131)', width: '7px', position: 'absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '7px', zIndex: '99', right: '1px' } } />
                                            <div className="slimScrollRail" style={ { width: '7px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(234, 234, 234)', opacity: '0.2', zIndex: '90', right: '1px' } } />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-extended dropdown-tasks" id="header_task_bar">
                                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-expanded="false">
                                    <i className="icon-calendar"></i>
                                    <span className="badge badge-default"> 3 </span>
                                </a>
                                <ul className="dropdown-menu extended tasks">
                                    <li className="external">
                                        <h3>You have
                                            <span className="bold">12 pending</span> tasks</h3>
                                        <a href="http://keenthemes.com/preview/metronic/theme/admin_1/app_todo.html">view all</a>
                                    </li>
                                    <li>
                                        <div className="slimScrollDiv" style={ { position: 'relative', overflow: 'hidden', width: 'auto', height: '275px' } }>
                                            <ul className="dropdown-menu-list scroller" style={ { height: '275px', overflow: 'hidden', width: 'auto' } } data-handle-color="#637283" data-initialized="1">
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="task">
                                                            <span className="desc">New release v1.2 </span>
                                                            <span className="percent">30%</span>
                                                        </span>
                                                        <span className="progress">
                                                            <span style={ { width: '40%' } } className="progress-bar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="sr-only">40% Complete</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="task">
                                                            <span className="desc">Application deployment</span>
                                                            <span className="percent">65%</span>
                                                        </span>
                                                        <span className="progress">
                                                            <span style={ { width: '65%' } } className="progress-bar progress-bar-danger" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="sr-only">65% Complete</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="task">
                                                            <span className="desc">Mobile app release</span>
                                                            <span className="percent">98%</span>
                                                        </span>
                                                        <span className="progress">
                                                            <span style={ { width: '98%' } } className="progress-bar progress-bar-success" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="sr-only">98% Complete</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="task">
                                                            <span className="desc">Database migration</span>
                                                            <span className="percent">10%</span>
                                                        </span>
                                                        <span className="progress">
                                                            <span style={ { width: '10%' } } className="progress-bar progress-bar-warning" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="sr-only">10% Complete</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="task">
                                                            <span className="desc">Web server upgrade</span>
                                                            <span className="percent">58%</span>
                                                        </span>
                                                        <span className="progress">
                                                            <span style={ { width: '58%' } } className="progress-bar progress-bar-info" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="sr-only">58% Complete</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="task">
                                                            <span className="desc">Mobile development</span>
                                                            <span className="percent">85%</span>
                                                        </span>
                                                        <span className="progress">
                                                            <span style={ { width: '85%' } } className="progress-bar progress-bar-success" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="sr-only">85% Complete</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="task">
                                                            <span className="desc">New UI release</span>
                                                            <span className="percent">38%</span>
                                                        </span>
                                                        <span className="progress progress-striped">
                                                            <span style={ { width: '38%' } } className="progress-bar progress-bar-important" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="sr-only">38% Complete</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="slimScrollBar" style={ { background: 'rgb(99, 114, 131)', width: '7px', position: 'absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '7px', zIndex: '99', right: '1px' } } />
                                            <div className="slimScrollRail" style={ { width: '7px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(234, 234, 234)', opacity: '0.2', zIndex: '90', right: '1px' } } />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-user">
                                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <img alt="" className="img-circle" src="./MetronicAdminDashboard_files/avatar3_small.jpg" />
                                    <span className="username username-hide-on-mobile"> Nick </span>
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-default">
                                    <li>
                                        <a href="http://keenthemes.com/preview/metronic/theme/admin_1/page_user_profile_1.html">
                                            <i className="icon-user"></i> My Profile </a>
                                    </li>
                                    <li>
                                        <a href="http://keenthemes.com/preview/metronic/theme/admin_1/app_calendar.html">
                                            <i className="icon-calendar"></i> My Calendar </a>
                                    </li>
                                    <li>
                                        <a href="http://keenthemes.com/preview/metronic/theme/admin_1/app_inbox.html">
                                            <i className="icon-envelope-open"></i> My Inbox
                                            <span className="badge badge-danger"> 3 </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://keenthemes.com/preview/metronic/theme/admin_1/app_todo.html">
                                            <i className="icon-rocket"></i> My Tasks
                                            <span className="badge badge-success"> 7 </span>
                                        </a>
                                    </li>
                                    <li className="divider"> </li>
                                    <li>
                                        <a href="http://keenthemes.com/preview/metronic/theme/admin_1/page_user_lock_1.html">
                                            <i className="icon-lock"></i> Lock Screen </a>
                                    </li>
                                    <li>
                                        <a href="http://keenthemes.com/preview/metronic/theme/admin_1/page_user_login_1.html">
                                            <i className="icon-key"></i> Log Out </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-quick-sidebar-toggler">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <i className="icon-logout"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;