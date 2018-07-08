import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';
import img1 from '../../../images/public/success1.png';

export default class Detail extends Component {

    state = {

    }
    componentWillUnmount(){
    }
    componentDidMount(){
    }

    render() {
        return (
            <div className="Detail-page">
                <Header headerLeft="header-back" headerCenterText="账单详情" headerLeftClick={()=>{this.props.history.push('/Index')}}/>

                <div className="bordertop"></div>

                <div className="Detail-page-main">
                    <ul>
                        <li className="first">
                            <span className="span1">付款金额</span>
                            <span className="span2">￥9.60</span>
                        </li>
                        <li>
                            <span className="span1">当前状态</span>
                            <span className="span2">支付成功</span>
                        </li>
                        <li>
                            <span className="span1">商品简称</span>
                            <span className="span2">苹果园</span>
                        </li>
                        <li>
                            <span className="span1">商户全称</span>
                            <span className="span2">深圳XXXX苹果超市</span>
                        </li>
                        <li>
                            <span className="span1">支付时间</span>
                            <span className="span2">2018-06-15 20:00:00</span>
                        </li>
                        <li>
                            <span className="span1">支付方式</span>
                            <span className="span2">平安银行</span>
                        </li>
                        <li>
                            <span className="span1">交易单号</span>
                            <span className="span2">888888888888888888888888</span>
                        </li>
                        <li>
                            <span className="span1">商户单号</span>
                            <span className="span2">888888888888888888888888</span>
                        </li>
                    </ul>
                </div>

                <div className="bordertop"></div>

                <div className="say">
                    <ul>
                        <li className="first">
                            <span className="span1">评价</span>
                            <span className="span2">未评价</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
