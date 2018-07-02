import './index.less'
import React, { Component } from 'react'
import { checkIsTelNum, checkPassword, checkVerifyCode, getChlFormUrl, checkIsIOS } from './../../../common/utils';
import Footer from './../footer/index';
import GraphicCode from './../graphicCode/index';
import * as ACTIONS from './../../../action/spread';
import Rsa from './../../../common/rsa_password';
import { download } from './../../download';
import hmCount from '../../../common/hmCount';

let codeTime = 30;  // 倒计时时间

class SpreadOne extends Component {
    imageCode = '';

    state = {
        telNum: '',  //输入的手机号码
        pwd: '',
        code: '',
        showDelete: false,
        showPwd: false,
        countDown: false,
        timeReset: codeTime,
        isCode: true,  // 验证码是否错误
        isTelNum: true,
        isPwd: true,
    }

    componentDidMount() {
        this.chl = getChlFormUrl() // 从url中获取渠道，没有为空

        // 在sessionStorage中获取值
        this.setState({
            telNum: sessionStorage.getItem('telNum') || '',
            pwd: sessionStorage.getItem('pwd') || '',
            code: sessionStorage.getItem('code') || ''
        })
        hmCount({category: checkIsIOS() ? 'ios页面访问chl=' + getChlFormUrl() : 'android页面访问chl=' + getChlFormUrl(), action: 'OutlookWebAccess', opt_label: '/spread/one?chl=' + getChlFormUrl()});
    }

    componentWillUnmount() {
        this.resetStatus();
        clearInterval(this.timer);
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

    handleChangePwd = (event) => {
        this.setState({
            pwd: event.target.value
        })
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

    showOrHidePwd = () => {
        this.setState({
            showPwd: !this.state.showPwd
        })
    }

    resetStatus = () => {
        this.setState({
            countDown: false,
            timeReset: codeTime
        })
    }

    // 获取短信验证码
    getMessageCode = () => {
        // 判断手机号
        if (!checkIsTelNum(this.state.telNum)) {
            this.setState({
                isTelNum: false,
            })
            return
        }

        this.setState({
            isTelNum: true
        })

        // 倒计时判断
        if (this.state.countDown) return

        this.setState({
            countDown: true
        })

        hmCount({category: '推广1', opt_label: '获取验证码chl=' + getChlFormUrl() });

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

    // 去借钱
    toLoan = () => {
        // 验证手机号码格式, 密码格式,短信验证码
        if (!checkIsTelNum(this.state.telNum) || !checkPassword(this.state.pwd) || !checkVerifyCode(this.state.code)) {
            this.setState({
                isTelNum: checkIsTelNum(this.state.telNum),
                isPwd: checkPassword(this.state.pwd),
                isCode: checkVerifyCode(this.state.code),
            })
            return
        } else {
            this.setState({
                isTelNum: true,
                isPwd: true,
                isCode: true,
            })
        }

        hmCount({category: '推广1', opt_label: '点击注册chl=' + getChlFormUrl()});

        // 特殊处理：渠道没有的时候直接提示参数异常
        if (!this.chl) {
            alert('参数异常')
            return
        }

        const { telNum, pwd, code } = this.state
        ACTIONS.toRegister({
            userName: telNum,
            password: Rsa(pwd),
            regType: 0,
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
                this.props.history.push('/spread/one/success')
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
        hmCount({category: '推广1', opt_label: '点击登录chl=' + getChlFormUrl()});
        download();
    }

    toAgreement = () => {
        hmCount({category: '推广1', opt_label: '点击用户协议chl=' + getChlFormUrl()});
        const { telNum, pwd, code } = this.state
        // 在sessionStorage中存储手机号，密码，验证码
        sessionStorage.setItem('telNum', telNum)
        sessionStorage.setItem('pwd', pwd)
        sessionStorage.setItem('code', code)
        this.props.history.push('/spread/agreement')
    }

    render() {
        const { telNum, pwd, code, showDelete, showPwd, countDown, timeReset, isTelNum, isPwd, isCode } = this.state;
        return (
            <div className="spread-one">
                <i className="logo"></i>
                <i className="header-one"></i>
                <ul className="input-block">
                    <li>
                        <input type="tel" maxLength="15" onFocus={() => { hmCount({category: '推广页1', opt_label: '输入手机号chl=' + getChlFormUrl()})}} placeholder="请输入手机号" className={isTelNum ? '' : 'error'} value={telNum} onChange={this.handleChangeTelNum}/>
                        {
                            showDelete ? (
                                <div className="click-box" onClick={this.deleteTelNum}>
                                    <i className="delete"></i>
                                </div>
                            ) : null
                        }
                    </li>
                    {
                        isTelNum ? null : (<p className="error-tip"><i></i>请输入有效的手机号码</p>)
                    }
                    <li>
                        <input onFocus={() => { hmCount({category: '推广页1', opt_label: '输入密码chl=' + getChlFormUrl()})}} placeholder="密码8-20位数字字母组合" maxLength="25" type={showPwd ? 'text' : 'password'} className={isPwd ? '' : 'error'} value={pwd} onChange={this.handleChangePwd}/>
                        <div className="click-box" onClick={this.showOrHidePwd}>
                            <i className={showPwd ? 'eye_open' : 'eye_close' }></i>
                        </div>
                    </li>
                    {
                        isPwd ? null : (<p className="error-tip"><i></i>密码需由8-20位数字字母组合</p>)
                    }
                    <li>
                        <input onFocus={() => { hmCount({category: '推广页1', opt_label: '输入验证码chl=' + getChlFormUrl()})}} placeholder="请输入验证码" maxLength="6" className={isCode ? '' : 'error'} value={code} onChange={this.handleVerifyCode}/>
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
                    <span className="click-btn" onClick={this.toLoan}>立刻借钱</span>
                    <p className="to-login">已注册用户请<span onClick={() => this.toDownload()}>点击登录</span></p>
                </ul>
                <Footer />
                <GraphicCode
                    ref="graphicCode"
                    getGraphicCode={this.getGraphicCode}
                />
            </div>
        )
    }
}

export default SpreadOne;
