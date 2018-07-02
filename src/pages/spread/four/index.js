import './index.less'
import React, { Component } from 'react'
import Footer from './../footer/index';
import { getChlFormUrl, checkIsIOS } from './../../../common/utils';
import hmCount from '../../../common/hmCount';

export default class SpreadFour extends Component {

    componentDidMount () {
        hmCount({category: checkIsIOS() ? 'ios页面访问chl=' + getChlFormUrl() : 'android页面访问chl=' + getChlFormUrl(), action: 'OutlookWebAccess', opt_label: '/spread/one?chl=' + getChlFormUrl()});
    };

    render() {
        return (
            <div className="spread-four">
                <div className="blank"></div>
                <i className="logo"></i>
                <i className="header-four"></i>
                <ul className="steps">
                    <li>
                        <i className="icon_1"></i>
                        <span>审核松</span>
                    </li>
                    <li>
                        <i className="icon_2"></i>
                        <span>到款快</span>
                    </li>
                    <li>
                        <i className="icon_3"></i>
                        <span>无抵押</span>
                    </li>
                </ul>
                <div className="oppo"></div>
                <Footer />
            </div>
        )
    }
}
