import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Header from '../../component/header/header.js';
import './index.less';
import img1 from '../../images/bank/shang.png';
import img2 from '../../images/bank/jian.png';
import img3 from '../../images/bank/zhong.png';


export default class Wallet extends Component {

    state = {
        id:3
    }
    componentWillUnmount(){
    }
    componentDidMount(){
        let data = this.props.match.params?JSON.parse(this.props.match.params.id):0;
        if(!data.id){
            this.setState({
                id:3
            })
            return;
        }
        this.setState({
            id:1
        })
    }

    render() {
        return (
            <div className="wallet-page">
                <Header headerLeft="header-back" headerLeftClick={()=>{this.props.history.push('/Index')}} headerCenterText="钱包" />

                <div className="wallet-page-top">
                    <ul className="wallet-page-ul" onClick={()=>{this.props.history.push('/Card/SelectCard')}}>
                        <li>
                            <img src={img1} alt=""/><span>招商银行储蓄卡</span>
                        </li>
                        <li style={{'display':this.state.id===1?'none':''}}>
                            <img src={img1} alt=""/><span>招商银行储蓄卡</span>
                        </li>
                        <li  style={{'display':this.state.id===1?'none':''}}>
                            <img src={img1} alt=""/><span>招商银行储蓄卡</span>
                        </li>
                    </ul>
                </div>

                <div className="wallet-page-border"></div>

                <div className="wallet-page-middle">
                    <div className="wallet-page-middle-title">充值金额</div>

                    <div className="wallet-page-middle-money">
                        <span>￥</span><input type="number" placeholder="0.00"/>
                    </div>
                </div>

                <div className="wallet-page-border"></div>

                <div className="wallet-page-footer" onClick={()=>{this.props.history.push('/Success/Charge')}}>
                    <input type="submit" value="充值"/>
                </div>

            </div>
        )
    }
}
