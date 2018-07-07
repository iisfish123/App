import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';

export default class Create extends Component {

    state = {
    }
    componentWillUnmount(){
    }
    componentDidMount(){
    }

    render() {
        return (
            <div className="Create">
                <Header headerLeft="header-back" headerCenterText="绑定银行卡" />
                <div className="Create-page-top">
                    <span>卡号</span> <input type="number" name="" id="" placeholder="请输入银行卡号"/>
                </div>

                <div className="SelectCard-page-footer" onClick={()=>{this.props.history.push(`/Wallet/${JSON.stringify({id:1})}`)}}>
                    <div className="button" >下一步</div>
                </div>
            </div>
        )
    }
}
