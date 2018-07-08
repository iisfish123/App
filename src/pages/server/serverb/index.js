import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';
import img1 from '../../../images/public/success1.png';

export default class Serverb extends Component {

    state = {

    }
    componentWillUnmount(){
    }
    componentDidMount(){
    }

    render() {
        return (
            <div className="Serverb-page">
                <Header headerLeft="header-back" headerCenterText="B服务协议" headerLeftClick={()=>{this.props.history.push('/register/phone')}}/>

                <div className="Serverb-page">
                    服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务
                </div>
            </div>
        )
    }
}
