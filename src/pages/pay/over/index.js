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
            <div className="over-page">
                <Header headerLeft="" headerCenterText="" headerLeftText="二维码收款" headerRightText="扫一扫"/>

                <div className="over-page-main">
                    <p>扫二维码向我付款</p>

                    <p>
                        ￥100
                    </p>

                    <img src={img1} alt=""/>

                    <p onClick={()=>{this.props.history.push('/Pay/Start')}}>清除金额</p>
                </div>
            </div>
        )
    }
}
