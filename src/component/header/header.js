import './index.less';
import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class Header extends Component {
    defaultClick = () => {
        this.props.history.goBack()
    }

    render() {
        //console.info(this.props.headerRight)
        const { headerRight, headerRightText, headerLeft, headerCenterText, headerRightClick, headerLeftClick } = this.props;
        return (
            <div className="header">
                <div className={`header-left ${headerLeft?headerLeft:''}`} onClick={headerLeftClick?headerLeftClick:(headerLeft==='header-back'?this.defaultClick:null)}></div>
                <div className="header-center">{headerCenterText?headerCenterText:''}</div>
                <div className={`header-right ${headerRight?headerRight:''}`} onClick={headerRightClick}>
                    {
                        headerRightText?headerRightText:''
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Header);