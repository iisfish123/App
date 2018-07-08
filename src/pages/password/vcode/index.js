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
        alert('短信验证码已发送');
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
            <div className="password-vcode">
                <Header headerLeft="header-back" headerCenterText="设置密码" />

                <div className="step-reg">

                    <p className="vcode-input input2">
                        <input type="number" placeholder="请输入手机号" />

                        <span className="vcode-button" onClick={this.handleTimer}>{this.state.otherTime}</span>
                    </p>

                    <p className="vcode-input">
                        <input type="password" placeholder="请输入6位验证码" />
                    </p>

                    <div className="submit"  onClick={() => {this.props.history.push('/Password/Setter')}}>
                        下一步
                    </div>

                </div>
            </div>
        )
    }
}
