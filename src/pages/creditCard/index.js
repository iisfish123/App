import React, { Component } from 'react';
import './index.less';
import * as ACTIONS from '../../action/creditCard/index';
import { checkPlatform } from '../../common/utils';
import img0 from '../../images/creditCard/one.png';
import img1 from '../../images/creditCard/two.png';
import img2 from '../../images/creditCard/three.png';
import hmCount from '../../common/hmCount';
import Swiper from 'swiper';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.png';

let a = [
    {cardPicUrl:image1, toUrl:'www.baidu.com?x=1', mainDesc:'img1'},
    {cardPicUrl:image2, toUrl:'www.baidu.com?x=2', mainDesc:'img2'},
    {cardPicUrl:image3, toUrl:'www.baidu.com?x=3', mainDesc:'img3'}
]

class OSType {
    static AndroidH5 = 'android-h5';
    static iOSH5 = 'ios-h5';
    static PCH5 = 'pc-h5';
}

export default class creditCard extends Component {

    static arr = [];

    state = {
        bank: [],
        banner: [],
        groom_left: [],
        groom_right:[],
        hot: [],
        startX:0,
        endX:0,
    }

    componentDidMount(){
        let mySwiper = new Swiper ('.swiper-container', {
            direction: 'vertical',
            loop: true,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });

        this.setState({
            banner: a,
        })
        return;

        let params = {
            ostype : checkPlatform() === 'IOS' ? OSType.iOSH5 : (checkPlatform() === 'Android' ? OSType.AndroidH5 : OSType.PCH5),
            channel : 'JLD-H5-GW',
            currentTime : new Date().getTime()
        };
        ACTIONS.creditCard({
            'checksum': '',
            'currentTime': params.currentTime,
            'data': JSON.stringify({
                'ostype': params.ostype,
                'channel': params.channel,
            })
        }).then(res => {
            let length = res.data.groom.length>=3;
            let groom0 = res.data.groom&&length?[res.data.groom.shift()]:[];
            let groom1 = res.data.groom&&length?res.data.groom:[];
            this.setState({
                bank: res.data.bank,
                banner: a,
                groom_left: groom0,
                groom_right: groom1,
                hot: res.data.hot,
            })
        })
    }

    bankClickHandle = (paramsObject) => {
        let localUrl = window.location.href.split('?');
        // baiduCount({category: '信用卡中心', opt_label: paramsObject.opt_label});//TODO 百度统计
        hmCount({category: paramsObject.category, opt_label: paramsObject.opt_label});
        // if (localUrl[1]) {
        //     let params = {
        //         'url': paramsObject.toUlr,
        //         'urlPageTitle': paramsObject.title
        //     };
        //     let base = new Base64();
        //     let result = base.encode(JSON.stringify(params));
        //     window.postMessage('rttxjldapp://appredirect/WebViewScreen?params=' + result);
        //     return;
        // }
        window.location.href = paramsObject.toUlr;

    }

    bannerStart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let startX = e.touches[0].clientX;
        let category = e.target.dataset.category;
        let url = e.target.dataset.url;
        let opt_label = e.target.dataset.opt_label;
        let title = e.target.dataset.title;
        this.timer = setTimeout(() => {
            this.bankClickHandle({
                toUlr:url,
                category,
                opt_label,
                title
            });
        }, 500);

        let index = e.target.dataset.index;
        let length = this.state.banner.length;
        if(length>1){
            if(index === ''+0){
                console.info('haha1');
                document.getElementsByClassName('banner-img')[0].style.transition = '0s';
                document.getElementsByClassName('banner-img')[0].style.left = -(length)*3.75+'rem';
            }
            if(index === ''+(length+2)){
                console.info('haha2');
                document.getElementsByClassName('banner-img')[0].style.transition = '0s';
                document.getElementsByClassName('banner-img')[0].style.left = -3.75+'rem';
            }
        }


        this.setState({
            startX: startX
        })
    }

    bannerMove = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let moveX = e.touches[0].clientX;
        this.timer&&clearTimeout(this.timer);
        this.setState({
            endX: moveX
        })
    }

    bannerEnd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let { startX, endX } = this.state;
        let left = parseFloat(document.getElementsByClassName('banner-img')[0].style.left?document.getElementsByClassName('banner-img')[0].style.left:0);
        //console.info(startX, endX);
        if(Math.abs(endX-startX)>50){
            if(endX-startX>0){
                document.getElementsByClassName('banner-img')[0].style.transition = 'all 0.5s';
                document.getElementsByClassName('banner-img')[0].style.left = left+3.75+'rem';
            }else{
                document.getElementsByClassName('banner-img')[0].style.transition = 'all 0.5s';
                document.getElementsByClassName('banner-img')[0].style.left = left-3.75+'rem';
            }
        }
    }

    render () {
        return (
            <div className="card-center">
                <div className="banner" style={{'backgroundImage':`url(${this.state.banner&&this.state.banner.length>0?this.state.banner[0].cardPicUrl&&111:''})`}}>

                    <div className="banner-img" style={{'transition':'all 0.5s', 'left':'0rem'}} onTouchStart={(e) => {this.bannerStart(e)}} onTouchMove={(e) => {this.bannerMove(e)}} onTouchEnd={(e) => {this.bannerEnd(e)}}>
                        {
                            this.state.banner&&this.state.banner.length===1?this.state.banner.map((item, index) => {
                                return (
                                    <img src={item.cardPicUrl}
                                         data-category="creditCard_banner"
                                        data-url={item.toUrl}
                                        data-opt_label={item.mainDesc}
                                        data-title={item.mainDesc}
                                         key={index} alt="" style={{'left':'0rem'}}/>
                                )
                            }):''
                        }

                        {
                            this.state.banner&&this.state.banner.length>1?(
                                <img data-index="0" src={this.state.banner[this.state.banner.length-1].cardPicUrl}
                                     data-category="creditCard_banner"
                                     data-url={this.state.banner[this.state.banner.length-1].toUrl}
                                     data-opt_label={this.state.banner[this.state.banner.length-1].mainDesc}
                                     data-title={this.state.banner[this.state.banner.length-1].mainDesc}
                                     alt="" style={{'left':'0rem'}}/>
                            ):''
                        }

                        {
                            this.state.banner&&this.state.banner.length>1?this.state.banner.map((item, index) => {
                                return (
                                    <img src={item.cardPicUrl} key={index} data-index={index+1}
                                         data-category="creditCard_banner"
                                         data-url={item.toUrl}
                                         data-opt_label={item.mainDesc}
                                         data-title={item.mainDesc}
                                         alt="" style={{'left':(index+1)*3.75+'rem'}}/>
                                )
                            }):''
                        }

                        {
                            this.state.banner&&this.state.banner.length>1?(
                                <img data-index={this.state.banner.length+2} src={this.state.banner[0].cardPicUrl}
                                     data-category="creditCard_banner"
                                     data-url={this.state.banner[0].toUrl}
                                     data-opt_label={this.state.banner[0].mainDesc}
                                     data-title={this.state.banner[0].mainDesc}
                                     alt="" style={{'left':(this.state.banner.length+1)*3.75+'rem'}}/>
                            ):''
                        }
                    </div>

                    
                </div>

                {
                    this.state.groom_left&&this.state.groom_left.length>0&&this.state.groom_right&&this.state.groom_right.length>0?(
                        <div className="recommend">
                            <h5 className="split-line-bottom"><span>达人推荐</span></h5>
                            <div className="recommend-list">
                                {
                                    this.state.groom_left&&this.state.groom_left.length>0?this.state.groom_left.map((item, index) => {
                                        // console.info(item)
                                        return <div className="left-content split-line-right" key={index} onClick={() => {this.bankClickHandle({
                                            category: 'creditCard_groom',
                                            toUlr: item.toUrl,
                                            opt_label: item.mainDesc,
                                            title: item.mainDesc
                                        })}}><p>{item.mainDesc}</p><span className="notice">{item.secoundCode}</span><img src={item.cardPicUrl} alt=""/></div>

                                    }):null
                                }
                                <ul className="right-content">
                                    {
                                        this.state.groom_right&&this.state.groom_right.length>0?this.state.groom_right.map((item, index) => {
                                            return(
                                                <li className="border split-line-bottom" key={index} onClick={() => {this.bankClickHandle({
                                                    category: 'creditCard_groom',
                                                    toUlr: item.toUrl,
                                                    opt_label: item.mainDesc,
                                                    title: item.mainDesc
                                                })}}>
                                                    <div>
                                                        <p>{item.mainDesc}</p>
                                                        <span className="notice">{item.secoundCode}</span>
                                                    </div>
                                                    <img src={item.cardPicUrl} alt=""/>
                                                </li>
                                            )
                                        }):null
                                    }
                                </ul>

                            </div>
                        </div>
                    ):''
                }


                {
                    this.state.bank&&this.state.bank.length>0?(
                        <div className="bank-center">
                            <h5 className="split-line-bottom"><span>银行中心</span></h5>
                            <ul>
                                {
                                    this.state.bank&&this.state.bank.length>0?this.state.bank.map((item, index) => {
                                        return(
                                            <li className="list-item"
                                                onClick={() => {this.bankClickHandle({
                                                    category: 'creditCard_bank-center',
                                                    toUlr: item.toUrl,
                                                    opt_label: item.bankName,
                                                    title: item.bankName
                                                })}}
                                                key={index}
                                            >
                                                <div className="bank-icon">
                                                    <img src={item.cardPicUrl} alt=""/>
                                                </div>
                                                <p>{item.bankName}</p>
                                            </li>
                                        )
                                    }):''
                                }
                            </ul>
                        </div>
                    ):''
                }


                {
                    this.state.hot&&this.state.length>0?(
                        <div className="hot-card">
                            <h5 className="split-line-bottom"><span>热卡推荐</span></h5>
                            <ul>
                                {
                                    this.state.hot&&this.state.hot.length>0?this.state.hot.map((item, index) => {
                                        return <li className="card-item split-line-bottom position-li" key= {index} onClick={() => {this.bankClickHandle({
                                            category: 'creditCard_hot-card',
                                            toUlr: item.toUrl,
                                            opt_label: item.bankName,
                                            title: item.bankName
                                        })}}>
                                            <img src={item.cardPicUrl} alt=""/>
                                            <div>
                                                <h6>{item.mainDesc}</h6>

                                                {
                                                    item.secoundCode&&item.secoundCode.length>0?item.secoundCode.split('\r').map((v, k) => {
                                                        return <p key={k}>{v}</p>
                                                    }):''
                                                }

                                            </div>
                                            {
                                                index<3?(<img className="position-img" src={
                                                    index===0?img0:(index===1?img1:img2)
                                                } alt=""/>):''
                                            }

                                        </li>
                                    }):''
                                }
                            </ul>
                        </div>
                    ):''
                }

            </div>
        )
    }
}
