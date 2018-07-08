import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';
import img1 from '../../../images/public/qrcode.png';

export default class Start extends Component {

    state = {
    }
    componentWillUnmount(){
    }
    componentDidMount(){
    }


    render() {
        return (
            <div className="start-page">
                <Header headerLeft="header-back" headerCenterText="二维码收款" headerLeftClick={()=>{this.props.history.push('/Index')}} headerRightText="扫一扫"/>

                <div className="start-page-main">
                    <p>扫二维码向我付款</p>
                    <img src={img1} alt=""/>

                    <p onClick={()=>{this.props.history.push('/Pay/Setmoney')}}>设置金额</p>
                </div>
            </div>
        )
    }
}
