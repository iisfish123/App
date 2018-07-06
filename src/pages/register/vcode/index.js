import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';

export default class Vcode extends Component {
    render() {
        return (
            <div className="register-vcode">
                <Header headerLeft="header-back" headerCenterText="Welcome Registe" />

                <div className="step-reg">
                    <div className="register-main">
                        <div className="register-step">
                            <div className="step">1</div>
                        </div>
                        <div className="register-step">
                            ..................
                            <div className="step  step-active">
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

                    <p className="vcode-input">
                        <input type="password" placeholder="设置登录密码" />

                        <span className="vcode-button">获取验证码</span>
                    </p>

                    <div className="submit"  onClick={() => {this.props.history.push('/register/vcode')}}>
                        下一步
                    </div>

                </div>
            </div>
        )
    }
}
