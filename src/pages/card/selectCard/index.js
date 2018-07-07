import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';
import img1 from '../../../images/bank/shang.png';
import img2 from '../../../images/bank/jian.png';
import img3 from '../../../images/bank/zhong.png';

export default class SelectCard extends Component {

    state = {

    }
    componentWillUnmount(){

    }
    componentDidMount(){

    }

    render() {
        return (
            <div className="SelectCard">
                <Header headerLeft="header-back" headerCenterText="选择充值银行卡" />
                <div className="SelectCard-page-top">
                    <ul className="SelectCard-page-ul" onClick={()=>{}}>
                        <li>
                            <img src={img1} alt=""/><span>招商银行储蓄卡</span>
                        </li>
                        <li>
                            <img src={img1} alt=""/><span>招商银行储蓄卡</span>
                        </li>
                        <li>
                            <img src={img1} alt=""/><span>招商银行储蓄卡</span>
                        </li>
                    </ul>
                </div>

                <div className="SelectCard-page-footer" onClick={()=>{this.props.history.push('/Card/Create')}}>
                    <div className="SelectCard-page-footer-icon"></div>
                    <span className="SelectCard-page-footer-p">添加银行卡</span>
                </div>
            </div>
        )
    }
}
