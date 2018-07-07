import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';

export default class Vcode extends Component {

    state = {
        'otherTime' : '获取验证码'
    }
    componentWillUnmount(){
        clearInterval(window.timer);
        window.timer= 0;
    }
    componentDidMount(){
    }

    handleTimer = ()=>{
        if(window.timer){
            return;
        }
        window.RealTime = 60;
        window.timer = setInterval(()=>{
            window.RealTime = window.RealTime-1;
            if(window.RealTime<0){
                clearInterval(window.timer);
                window.timer = 0;
                window.RealTime = 60;
                this.setState({
                    otherTime:'重新获取验证码'
                });
                return ;
            }
            this.setState({
                otherTime:window.RealTime+'秒后重新获取'
            })
        },1000)
    }

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
                            <div className="step">
                                2
                            </div>
                            ..................
                        </div>
                        <div className="register-step">
                            <div className="step step-active">3</div>
                        </div>
                    </div>

                    <div className="register-step-name">
                        <div className="step-name">输入手机号</div>
                        <div className="step-name">设置登录密码</div>
                        <div className="step-name">获取验证码</div>
                    </div>

                    <p className="vcode-input">
                        <input type="password" placeholder="请输入6位验证码" />

                        <span className="vcode-button" onClick={this.handleTimer}>{this.state.otherTime}</span>
                    </p>

                    <div className="submit"  onClick={() => {this.props.history.push('/Index')}}>
                        下一步
                    </div>

                </div>
            </div>
        )
    }
}
