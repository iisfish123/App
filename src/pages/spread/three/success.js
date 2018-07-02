import './success.less'
import React, { Component } from 'react'
import Footer from './../footer/index'
import { download } from './../../download'

export default class SuccessThree extends Component {
    componentDidMount() {
        sessionStorage.clear()
    }
    render() {
        return (
            <div className="success-three">
                <i className="logo-three"></i>
                <i className="success-box"></i>
                <span className="click-btn-three" onClick={() => download()}></span>
                <Footer />
            </div>
        )
    }
}
