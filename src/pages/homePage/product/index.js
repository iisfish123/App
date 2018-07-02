import React, { Component } from 'react';
import { stepsData, iconImg, lineImg } from './stepsData';
import './product.less';
import { checkIsIOS } from './../../../common/utils';
// import { download } from './../../download';
import hmCount from './../../../common/hmCount';
import API from './../../../service/api';
import * as fetch from './../../../service/httpService';

class Product extends Component {

    state = {
        androidDownloadUrl: 'javascript:void(0)'
    }

    // componentDidMount () {
    //     this.fetchAndroidAPK();
    // }
    //
    // //获取安卓apk
    // fetchAndroidAPK = () => {
    //     fetch.postData(API.anroidLastApkAdrr).then(data => {
    //         if (data.code === 0 && data.data) {
    //             this.setState({
    //                 androidDownloadUrl: data.data.url
    //             });
    //         }
    //     });
    // };
    downLoad = () => {
        // hmCount({category: '官网点击', opt_label: '下载'});
        if (checkIsIOS()) {
            alert('暂时没有ios下载链接，敬请期待');
        } else {
            window.location = 'https://static.jldloan.com/g1/M00/09/09/oYYBAFsPtyGAPAieAYuWC_MV_Oc360.apk'
        }
    };

    render() {

        // console.log(this.state);

        return (
            <div id="container" className="product">
                <div className="product-header">
                    <h4 className="first-level-title title-margin">超易借，秒立得</h4>
                    <p className="first-level-content">借立得将为您提供满意的助贷服务，您仅需身份证即可申请借款，大数据智能审核，极速放款。</p>
                    <a className="button" href="https://static.jldloan.com/g1/M00/0B/64/oYYBAFsaMVuAduXJAYuWTz4MTNs085.apk" >立即下载</a>
                </div>
                <content>
                    <ul className="steps">
                        {
                            stepsData.map((item, key) => {
                                return (
                                    <li key={key}>
                                        <h4 className="second-level-title title">{item.title}</h4>
                                        <p className="second-level-content content">{item.content}</p>
                                        <img className="img" src={item.img} alt="loading"/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <h4 className="second-level-title borrow-title">简单四步 借款到账</h4>
                    <ul className="borrow-steps">
                        <li>
                            <img className="fl steps-icon" src={iconImg[0]} alt="loading"/>
                            <div className="fr order-number"><strong>01</strong><span>注册账号</span></div>
                            <img className="left-line line-position" src={lineImg[0]} alt="line"/>
                        </li>
                        <li>
                            <img className="fr steps-icon" src={iconImg[1]} alt="loading"/>
                            <div className="fl order-number"><strong>02</strong><span>填写信息</span></div>
                            <img className="right-line line-position" src={lineImg[1]} alt="line"/>
                        </li>
                        <li>
                            <img className="fl steps-icon" src={iconImg[2]} alt="loading"/>
                            <div className="fr order-number"><strong>03</strong><span>快速审批</span></div>
                            <img className="left-line line-position" src={lineImg[0]} alt="line"/>
                        </li>
                        <li>
                            <img className="fr steps-icon" src={iconImg[3]} alt="loading"/>
                            <div className="fl order-number"><strong>04</strong><span>极速到账</span></div>
                        </li>
                    </ul>
                </content>
                <div className="product-footer">
                    <a className="button button-margin" onClick={this.downLoad}>立即下载</a>
                </div>
            </div>
        );
    }
}

export default Product;
