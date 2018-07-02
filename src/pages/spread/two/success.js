import './success.less'
import React, { Component } from 'react'
import Footer from './../footer/index'
import { download } from './../../download'

export default class SuccessTwo extends Component {
    componentDidMount() {
        sessionStorage.clear()
    }
    render() {
        return (
            <div className="success-two">
                <i className="logo"></i>
                <i className="success-box"></i>
                <span className="click-btn" onClick={() => download()}>下载APP，马上提现</span>
                <Footer />
            </div>
        )
    }
}
