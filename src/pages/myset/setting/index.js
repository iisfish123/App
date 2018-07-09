import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';

export default class Setting extends Component {

    state = {
    }
    componentWillUnmount(){
    }
    componentDidMount(){
    }

    render() {
        return (
            <div className="Setting-page">
                <Header headerLeft="header-back" headerCenterText="个人设置" />


                <div className="Setting-page-main">
                    <p>
                        <span>实名验证</span>
                        <span className="foot">已验证</span>
                        <i></i>
                    </p>

                    <p onClick={()=>{this.props.history.push('/Password/Vcode')}}>
                        <span>修改密码</span>
                        <span className="foot"></span>
                        <i></i>
                    </p>


                </div>

            </div>
        )
    }
}
