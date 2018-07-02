import './index.less';
import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../component/header/header.js';

export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Header headerRightText="注 冊" />

                <div className="home-page-title">
                    Wallet
                </div>

                <div className="home-page-main">
                    <p>
                        账号：<input type="number" placeholder="请输入手机号"/>
                    </p>
                    <p>
                        密码：<input type="text" placeholder="请输入密码"/>
                    </p>

                    <div className="submit">
                        登录
                    </div>

                    <a href="">forget password</a>
                </div>

            </div>
        )
    }
}
