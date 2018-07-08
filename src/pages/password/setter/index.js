import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';

export default class Setter extends Component {

    submitAll = ()=>{
        alert('密码修改成功，请登录');
        this.props.history.push('/homePage');
    }

    render() {
        return (
            <div className="Setter-phone">
                <Header headerLeft="header-back" headerCenterText="设置密码" />

                <div className="step-reg">

                    <p className="vcode-input">
                        <input type="password" placeholder="请设置新登录密码" />
                    </p>

                    <p className="vcode-input-tips">
                        <span> 6~12位数字、字母、符号，不许有空格</span>
                    </p>

                    <div className="submit"  onClick={this.submitAll}>
                        完成
                    </div>

                </div>



            </div>
        )
    }
}
