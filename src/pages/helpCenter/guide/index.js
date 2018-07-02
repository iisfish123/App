import React, { Component } from 'react';
import './index.less';
import screen1 from './../../../images/helpCenter/screen1.png';
import screen2 from './../../../images/helpCenter/screen2.png';
import step1 from './../../../images/helpCenter/step1.png';
import step2 from './../../../images/helpCenter/step2.png';
import step3 from './../../../images/helpCenter/step3.png';

export default class noviceGuide extends Component {

    render () {
        return (
            <div className="novice-guide">
                <nav>
                    <div className="navFixed split-line" onWheel={() => this.handleWheel()}>
                        <i className={'go-back'} onClick={() => {this.props.history.goBack()}} ></i>
                        <h4 className={'title'}>新手引导</h4>
                        <i></i>
                    </div>
                </nav>
                <div className="guide-content">
                    <ul className="guide-step">
                        <li className="li01">
                            <img className="step-icon" src={step1} alt=""/>
                            <div className="step-content">
                                <span className="triangle-up"></span>
                                <h3>纯线上申请,轻松填资料</h3>
                                <p>1. 随时随地申请</p>
                                <p>2. 填写真实信息</p>
                                <p>3. 获取更高额度</p>
                            </div>
                            <img className="screen" src={screen1} alt=""/>
                        </li>
                        <li className="li02">
                            <img className="step-icon" src={step2} alt=""/>
                            <div className="step-content">
                                <span className="triangle-up"></span>
                                <h3>产品多样化,极速秒到账</h3>
                                <p>1. 最高5万额度</p>
                                <p>2. 系统自动审核</p>
                                <p>3. 最快5分钟放款</p>
                            </div>
                            <img className="screen" src={screen2} alt=""/>
                        </li>
                        <li className="li01 li03">
                            <img className="step-icon" src={step3} alt=""/>
                            <div className="step-content">
                                <span className="triangle-up"></span>
                                <h3>关注微信号,优惠早知道</h3>
                                <p>1. 微信自动提醒还款</p>
                                <p>2. 最新优惠早知道</p>
                                <p>3. 一键查询订单信息</p>
                                <button onClick={() => window.postMessage('weixin://jielidegf')}>关注借立得微信</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="guide-btn" onClick={() => window.postMessage('close')}>立即借钱</div>
            </div>
        )
    }
}
