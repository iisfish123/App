import './index.less'
import React, { Component } from 'react'
import { checkIsTelNum, checkPassword, checkVerifyCode, getChlFormUrl, checkIsIOS } from './../../../common/utils';
import GraphicCode from './../graphicCode/index';
import * as ACTIONS from './../../../action/spread';
import Rsa from './../../../common/rsa_password';
import { download } from './../../download';
import hmCount from '../../../common/hmCount';

let codeTime = 30;  // 倒计时时间

class SpreadThree extends Component {
    imageCode = ''

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
        // 在sessionStorage中获取值
        this.setState({
            telNum: sessionStorage.getItem('telNum') || '',
            pwd: sessionStorage.getItem('pwd') || '',
            code: sessionStorage.getItem('code') || ''
        })
        this.chl = getChlFormUrl() // 从url中获取渠道，没有为空
        hmCount({category: checkIsIOS() ? 'ios页面访问chl=' + getChlFormUrl() : 'android页面访问chl=' + getChlFormUrl(), action: 'OutlookWebAccess', opt_label: '/spread/three?chl=' + getChlFormUrl()});
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

        if (this.state.countDown) return;

        this.setState({
            countDown: true
        })

        hmCount({category: '推广3', opt_label: '获取验证码chl=' + getChlFormUrl()});

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
        // 验证手机号码格式, 密码格式
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

        hmCount({category: '推广3', opt_label: '点击注册chl=' + getChlFormUrl()});

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
            if (res.data &&  res.data.code === 'Y') {
                this.showGraphicCode()
                return
            }

            if (res.code === 0) {
                this.props.history.push('/spread/three/success')
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
        hmCount({category: '推广3', opt_label: '点击登录chl=' + getChlFormUrl()});
        download();
    }

    toAgreement = () => {
        hmCount({category: '推广3', opt_label: '点击用户协议chl=' + getChlFormUrl()});
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
            <div className="spread-three">
                <i className="logo-three"></i>
                <i className="header-three"></i>
                <ul className="input-block">
                    <li>
                        <i className="phone"></i>
                        <input type="tel" maxLength="15" onFocus={() => { hmCount({category: '推广页3', opt_label: '输入手机号chl=' + getChlFormUrl()})}} placeholder="请输入手机号" className={isTelNum ? '' : 'error'} value={telNum} onChange={this.handleChangeTelNum} />
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
                    <li>
                        <i className="code"></i>
                        <input onFocus={() => { hmCount({category: '推广页3', opt_label: '输入密码chl=' + getChlFormUrl()})}}  placeholder="密码8-20位数字字母组合" maxLength="25" type={showPwd ? 'text' : 'password'} className={isPwd ? '' : 'error'} value={pwd} onChange={this.handleChangePwd} />
                        <div className="click-box" onClick={this.showOrHidePwd}>
                            <i className={showPwd ? 'eye_open' : 'eye_close'}></i>
                        </div>
                    </li>
                    {
                        isPwd ? null : (<p className="error-tip"><i></i>密码格式错误</p>)
                    }
                    <li>
                        <i className="number"></i>
                        <input onFocus={() => { hmCount({category: '推广页3', opt_label: '输入验证码chl=' + getChlFormUrl()})}} placeholder="请输入验证码" maxLength="6" className={isCode ? '' : 'error'} value={code} onChange={this.handleVerifyCode}/>
                        <div className="click-box large" onClick={this.getMessageCode}>
                            {
                                countDown ? (<i className="get-code gray">{timeReset}s重发</i>) : (<i className="get-code">获取验证码</i>)
                            }
                        </div>
                    </li>
                    {
                        isCode ? null : <p className="error-tip"><i></i>验证码错误</p>
                    }
                    <p className="agreement"><label>我已阅读并同意</label><span onClick={this.toAgreement}>《用户注册协议》</span></p>
                    <span className="click-btn-three" onClick={this.toLoan}>测一下我的额度</span>
                    <p className="to-login"><label>已注册用户请</label><span onClick={() => this.toDownload()}>点击登录</span></p>
                    <ul className="three-point">
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

export default SpreadThree;
