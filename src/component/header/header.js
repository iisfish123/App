import './index.less';
import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';



export default class Header extends Component {
    render() {
        //console.info(this.props.headerRight)
        const { headerRight, headerRightText, headerLeft, headerCenterText } = this.props;
        return (
            <div className="header">
                <div className={`header-left ${headerLeft?headerLeft:''}`}></div>
                <div className="header-center">{headerCenterText?headerCenterText:''}</div>
                <div className={`header-right ${headerRight?headerRight:''}`}>
                    {
                        headerRightText?headerRightText:''
                    }
                </div>
            </div>
        )
    }
}
