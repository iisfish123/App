import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';

export default class Setmoney extends Component {
    render() {
        return (
            <div className="Setmoney-page">
                <Header headerLeft="" headerCenterText="" headerLeftText="二维码收款" headerRightText="扫一扫"/>


                <div className="Setmoney-page-middle">
                    <div className="wallet-page-middle-title">收款金额</div>

                    <div className="Setmoney-page-middle-money">
                        <span>￥</span><input type="number" placeholder="0.00"/>
                    </div>

                    <p>添加收钱备注</p>
                </div>

                <div className="Setmoney-page-footer" onClick={()=>{this.props.history.push('/Pay/Over')}}>
                    <input type="submit" value="下一步"/>
                </div>



            </div>
        )
    }
}
