import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../../component/header/header.js';
import './index.less';
import img1 from '../../../images/index/file.png';

export default class AccountList extends Component {

    state = {

    }
    componentWillUnmount(){
    }
    componentDidMount(){
    }

    render() {
        return (
            <div className="AccountList-page">
                <Header headerLeft="header-back" headerCenterText="账单" headerLeftClick={()=>{this.props.history.push('/Index')}}/>

                <div className="AccountList-page-title">
                    <p>6月</p>
                    <p>总支出￥48  总收入100</p>
                </div>

                <div className="AccountList-page-top">
                    <ul className="AccountList-page-ul" onClick={()=>{this.props.history.push('/Account/Detail')}}>
                        <li>
                            <img src={img1} alt=""/>
                            <div className="list-mid">
                                <p>包包连锁饺子馆</p>
                                <p>6月12号 18:00</p>
                            </div>
                            <div className="footer">
                                -16.00
                            </div>
                        </li>

                        <li>
                            <img src={img1} alt=""/>
                            <div className="list-mid">
                                <p>包包连锁饺子馆</p>
                                <p>6月12号 18:00</p>
                            </div>
                            <div className="footer">
                                +16.00
                            </div>
                        </li>
                    </ul>
                </div>



                <div className="AccountList-page-title">
                    <p>5月</p>
                    <p>总支出￥48  总收入100</p>
                </div>

                <div className="AccountList-page-top">
                    <ul className="AccountList-page-ul"  onClick={()=>{this.props.history.push('/Account/Detail')}}>
                        <li>
                            <img src={img1} alt=""/>
                            <div className="list-mid">
                                <p>包包连锁饺子馆</p>
                                <p>5月12号 18:00</p>
                            </div>
                            <div className="footer">
                                -16.00
                            </div>
                        </li>

                        <li>
                            <img src={img1} alt=""/>
                            <div className="list-mid">
                                <p>包包连锁饺子馆</p>
                                <p>5月12号 18:00</p>
                            </div>
                            <div className="footer">
                                +16.00
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}
