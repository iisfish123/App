import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';
import img1 from '../../../images/public/success1.png';

export default class Servera extends Component {

    state = {

    }
    componentWillUnmount(){
    }
    componentDidMount(){
    }

    render() {
        return (
            <div className="Servera-page">
                <Header headerLeft="header-back" headerCenterText="A服务协议" headerLeftClick={()=>{this.props.history.push('/register/phone')}}/>

                <div className="Servera-page">
                    服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务服务
                </div>
            </div>
        )
    }
}
