import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';
import img1 from '../../../images/public/success1.png';

export default class Charge extends Component {

    state = {

    }
    componentWillUnmount(){
    }
    componentDidMount(){
    }

    render() {
        return (
            <div className="charge-page">
                <Header headerCenterText="充值详情" />

                <div className="charge-page-title">
                    <img src={img1} alt=""/>
                    <p>充值成功</p>
                </div>

                <div className="charge-page-main">
                    <div className="charge-page-card">
                        <div className="card-title">储蓄卡</div>
                        <div className="card-value">招商银行尾号1234</div>
                    </div>
                    <div className="charge-page-money">
                        <div className="money-title">充值金额</div>
                        <div className="money-value">¥1234</div>
                    </div>
                </div>

                <div className="charge-page-footer" onClick={()=>{this.props.history.push('/Index')}}>
                    <input type="submit" value="完成"/>
                </div>
            </div>
        )
    }
}
