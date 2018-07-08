import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';

export default class Info extends Component {

    state = {
    }
    componentWillUnmount(){
    }
    componentDidMount(){
    }

    render() {
        return (
            <div className="info-page">
                <Header headerLeft="header-back" headerCenterText="实名认证" />

                <div className="info-page-border">
                    已认证信息
                </div>

                <div className="info-page-main">
                    <p>
                        <span>实名验证</span>
                        <span className="foot">陆加官</span>
                        <i></i>
                    </p>

                    <p>
                        <span>证件类型</span>
                        <span className="foot">身份证</span>
                        <i></i>
                    </p>

                    <p>
                        <span>证件号码</span>
                        <span className="foot">441802199102033218</span>
                        <i></i>
                    </p>


                </div>


                <div className="info-page-border info-page-border2">
                    完善信息享受全面的支付服务
                </div>

                <div className="info-page-main">
                    <p>
                        <span>职业类型</span>
                        <span className="foot"></span>
                        <i></i>
                    </p>

                    <p>
                        <span>身份证照片</span>
                        <span className="foot"></span>
                        <i></i>
                    </p>

                    <p>
                        <span>证件有效期</span>
                        <span className="foot"></span>
                        <i></i>
                    </p>


                </div>

            </div>
        )
    }
}
