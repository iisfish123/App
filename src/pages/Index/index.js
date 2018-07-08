import './index.less';
import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../component/header/header.js';

export default class Index extends Component {

    headerLeftClick = () => {
        this.props.history.push('/Myset/Setting')
    }

    headerRightClick = () => {
        this.props.history.push('/Account/List')
    }

    goToRecharge = () =>{//充值

    }

    render() {
        return (
            <div className="index-page-home">
                <Header headerLeft="header-head" headerLeftClick={this.headerLeftClick}

                        headerRight="header-file" headerRightClick={this.headerRightClick}/>

                <div className="index-page-home-header">
                    <div className="index-page-home-title">
                        总资产（元）<i className="index-page-home-title-eye-icon"></i>
                    </div>
                    <div className="index-page-home-money">
                        0.00
                    </div>
                </div>

                <div className="index-page-home-main">
                    <div className="index-flex index-page-home-main-three-1" onClick={() => {this.props.history.push(`/Wallet/${JSON.stringify({id:0})}`)}}>
                        <div className="index-page-home-main-three-img"></div>
                        <p className="index-page-home-main-three-p">充值</p>
                    </div>
                    <div className="index-flex index-page-home-main-three-2" onClick={() => {this.props.history.push('/Pay/Start')}}>
                        <div className="index-page-home-main-three-img"></div>
                        <p className="index-page-home-main-three-p">待付款</p>
                    </div>
                    <div className="index-flex index-page-home-main-three-3">
                        <div className="index-page-home-main-three-img"></div>
                        <p className="index-page-home-main-three-p">转账</p>
                    </div>
                </div>

                <div className="index-page-home-footer">
                    <div className="index-page-home-footer-headicon"></div>
                    <span>我的银行卡</span>
                </div>

            </div>
        )
    }
}
