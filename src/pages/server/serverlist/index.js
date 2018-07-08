import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';
import img1 from '../../../images/public/success1.png';

export default class Serverlist extends Component {

    state = {

    }
    componentWillUnmount(){
    }
    componentDidMount(){
    }

    render() {
        return (
            <div className="Serverlist-page">
                <Header headerLeft="header-back" headerCenterText="服务协议" headerLeftClick={()=>{this.props.history.push('/register/phone')}}/>

                <div className="SelectCard-page-top">
                    <ul className="SelectCard-page-ul" onClick={()=>{}}>
                        <li onClick={()=>{this.props.history.push('/Server/Servera')}}>
                            <span>《A服务协议》</span>
                        </li>
                        <li onClick={()=>{this.props.history.push('/Server/Serverb')}}>
                            <span>《B服务协议》</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
