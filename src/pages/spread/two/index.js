import './index.less'
import React, { Component } from 'react'
import { checkIsTelNum, checkVerifyCode, getChlFormUrl, checkIsIOS } from './../../../common/utils';
import GraphicCode from './../graphicCode/index';
import * as ACTIONS from './../../../action/spread';
import { download } from './../../download';
import hmCount from '../../../common/hmCount';

let codeTime = 30;  // 倒计时时间

class SpreadTwo extends Component {
    imageCode = ''

    state = {
        showCode: false, // 显示验证码
        countDown: false,
        timeReset: codeTime,
        isTelNum: true,
        telNum: '',  //输入的手机号码
        showDelete: false,
        code: '',  // 短信验证码
        isCode: true,
    }

    componentDidMount() {
        // 在sessionStorage中获取值
        this.setState({
            telNum: sessionStorage.getItem('telNum') || '',
            code: sessionStorage.getItem('code') || '',
            showCode: sessionStorage.getItem('showCode') || false,
        })
        this.chl = getChlFormUrl() // 从url中获取渠道，没有为空
        hmCount({category: checkIsIOS() ? 'ios页面访问chl=' + getChlFormUrl() : 'android页面访问chl=' + getChlFormUrl(), action: 'OutlookWebAccess', opt_label: '/spread/two?chl=' + getChlFormUrl()});
    }

    componentWillUnmount() {
        this.resetStatus();
        clearInterval(this.timer);
    }

    resetStatus = () => {
        this.setState({
            countDown: false,
            timeReset: codeTime
        })
    }

    // 获取短信验证码
    getMessageCode = () => {
        if (this.state.countDown) return;

        this.setState({
            countDown: true
        })

        this.timer = setInterval(() => {
            if (this.state.timeReset > 0) {
                this.setState({
                    timeReset: this.state.timeReset - 1
                })
            } else {
                this.resetStatus();
                clearInterval(this.timer);
            }
        }, 1000)

        // 获取短信验证码
        ACTIONS.getMsgCode({
            'userName': this.state.telNum
        }).then(res => {
            if (res.data.code === 'Y') {
                this.showGraphicCode()
            } else {
                alert(res.msg)
            }
        })
    }

    handleChangeTelNum = (event) => {
        if (event.target.value.length > 0) {
            this.setState({
                showDelete: true,
                telNum: event.target.value
            })
        } else {
            this.setState({
                showDelete: false,
                telNum: event.target.value
            })
        }
    }

    handleVerifyCode = (event) => {
        this.setState({
            code: event.target.value
        })
    }

    deleteTelNum = () => {
        this.setState({
            telNum: '',
            showDelete: false
        })
    }

    // 快速申请
    quickApply = () => {
        // 验证手机号码格式, 密码格式
        hmCount({category: '推广页2', opt_label: '获取验证码chl=' + getChlFormUrl()});
        if (!checkIsTelNum(this.state.telNum)) {
            this.setState({
                isTelNum: false,
            })
            return;
        } else {
            this.getMessageCode();
            this.setState({
                showCode: true,
                isTelNum: true
            })
        }
    }

    // 去借钱
    toLoan = () => {
        if (!checkVerifyCode(this.state.code)) {
            this.setState({
                isCode: false,
            })
            return
        } else {
            this.setState({
                isCode: true,
            })
        }

        hmCount({category: '推广页2', opt_label: '点击注册chl=' + getChlFormUrl()});

        // 特殊处理：渠道没有的时候直接提示参数异常
        if (!this.chl) {
            alert('参数异常')
            return
        }

        const { telNum, code } = this.state
        ACTIONS.toRegister({
            userName: telNum,
            regType: 1,
            verifyCode: code,
            channel: this.chl || '',
            ostype: 4,
            captcha: this.imageCode
        }).then(res => {
            // image code
            if (res.data && res.data.code === 'Y') {
                this.showGraphicCode()
                return
            }

            if (res.code === 0) {
                this.props.history.push('/spread/two/success')
            } else {
                alert(res.msg)
            }
        })
    }

    showGraphicCode = () => {
        this.refs.graphicCode.show()
    }

    getGraphicCode = (code) => {
        this.imageCode = code
    }

    toDownload = () => {
        hmCount({category: '推广2', opt_label: '点击登录chl=' + getChlFormUrl()});
        download();
    }

    toAgreement = () => {
        hmCount({category: '推广2', opt_label: '点击用户协议chl=' + getChlFormUrl()});
        const { telNum, code, showCode } = this.state
        // 在sessionStorage中存储手机号，验证码
        sessionStorage.setItem('telNum', telNum)
        sessionStorage.setItem('code', code)
        sessionStorage.setItem('showCode', showCode)
        this.props.history.push('/spread/agreement')
    }

    render() {
        const { showCode, countDown, timeReset, isTelNum, telNum, showDelete, code, isCode } = this.state;
        return (
            <div className="spread-two">
                <i className="logo"></i>
                <i className="header-two"></i>
                <ul className="input-block">
                    <li>
                        <input type="tel" onFocus={() => { hmCount({category: '推广页2', opt_label: '输入手机号chl=' + getChlFormUrl()})}} placeholder="请输入手机号" maxLength="15" className={isTelNum ? '' : 'error'} value={telNum} onChange={this.handleChangeTelNum}/>
                        {
                            showDelete ? (
                                <div className="click-box" onClick={this.deleteTelNum}>
                                    <i className="delete"></i>
                                </div>
                            ) : null
                        }
                    </li>
                    {
                        isTelNum ? null : (<p className="error-tip"><i></i>手机号码格式错误</p>)
                    }
                    {
                        showCode ? (
                            <div>
                                <p className="code-tip">已发送短信验证码，请耐心等待</p>
                                <li>
                                    <input value={code} onFocus={() => { hmCount({category: '推广页2', opt_label: '输入验证码chl=' + getChlFormUrl()})}} placeholder="请输入验证码" maxLength="6" onChange={this.handleVerifyCode}/>
                                    <div className="click-box large" onClick={this.getMessageCode}>
                                        {
                                            countDown ? (<i className="get-code gray">{timeReset}s重发</i>) : (<i className="get-code">获取验证码</i>)
                                        }
                                    </div>
                                </li>
                                {
                                    isCode ? null : <p className="error-tip"><i></i>验证码错误</p>
                                }
                                <p className="agreement">我已阅读并同意<span onClick={this.toAgreement}>《用户注册协议》</span></p>
                                <span className="click-btn" onClick={this.toLoan}>免费领取借款额度</span>
                            </div>
                        ) : (<span className="click-btn" onClick={this.quickApply}>快速申请</span>)
                    }
                    <p className="had-registed">已注册用户请<span onClick={() => this.toDownload()}>点击登录</span></p>
                    <div className="three-point">
                        <em className="title"></em>
                        <ul className="point">
                            <li>
                                <em className="icon_1"></em>
                                <span>线上提交资料</span>
                            </li>
                            <li>
                                <em className="icon_2"></em>
                                <span>系统自动放款</span>
                            </li>
                            <li>
                                <em className="icon_3"></em>
                                <span>立即拿钱</span>
                            </li>
                        </ul>
                    </div>
                </ul>
                <div className="footer-tip">
                    <div className="footer">
                        <p>Copyright © 2018 借立得 All Rights Reserved.粤ICP备17151019号.</p>
                        <p>版权所有 深圳市融投天下互联网金融服务有限公司</p>
                    </div>
                    <div className="risk-tip">
                        <p className="money-from">资金来源：湖北消费金融股份有限公司</p>
                        <p>金融市场有风险，入市需谨慎</p>
                        <p>具体额度及到款时间视个人情况而定</p>
                    </div>
                </div>
                <GraphicCode
                    ref="graphicCode"
                    getGraphicCode={this.getGraphicCode}
                />
            </div>
        )
    }
}

export default SpreadTwo;
