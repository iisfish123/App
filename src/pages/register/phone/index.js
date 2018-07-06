import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';

export default class Phone extends Component {
    render() {
        return (
            <div className="register-phone">
                <Header headerLeft="header-back" headerCenterText="Welcome Registe" />

                <div className="step-reg">
                    <div className="register-main">
                        <div className="register-step">
                            <div className="step step-active">1</div>
                        </div>
                        <div className="register-step">
                            ..................
                            <div className="step">
                                2
                            </div>
                            ..................
                        </div>
                        <div className="register-step">
                            <div className="step">3</div>
                        </div>
                    </div>

                    <div className="register-step-name">
                        <div className="step-name">输入手机号</div>
                        <div className="step-name">设置登录密码</div>
                        <div className="step-name">获取验证码</div>
                    </div>

                    <p>
                        <input type="tel" placeholder="请输入手机号"/>
                    </p>

                    <div className="submit" onClick={() => {this.props.history.push('/register/password')}}>
                        下一步
                    </div>

                    <div className="agree">
                        <input type="radio"/>我已阅读并同意<a href="#">注册相关协议</a>
                    </div>
                </div>





            </div>
        )
    }
}
