import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';

export default class Phone extends Component {
    render() {
        return (
            <div className="register-phone">
                <Header headerLeft="header-back" headerCenterText="Welcome Registe"/>

                <div className="register-phone-main">

                    <div className="main-step">
                        <div className="register-phone-step">
                            <div className="step step-active">1</div>
                        </div>
                        <div className="register-phone-step">
                            ..................
                            <div className="step">
                                2
                            </div>
                            .................
                        </div>
                        <div className="register-phone-step">
                            <div className="step">3</div>
                        </div>
                    </div>


                    <div className="register-step-name">
                        <div className="step-name">输入手机号</div>
                        <div className="step-name">设置登录密码</div>
                        <div className="step-name">获取验证码</div>
                    </div>
                </div>
            </div>
        )
    }
}
