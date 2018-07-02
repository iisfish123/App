import './index.less'
import React from 'react'
import { APIEnvi } from './../../../service/api'
import * as ACTIONS from './../../../action/spread'

export default class GraphicCode extends React.Component {
    // http://192.168.9.101/jld-mobile-web/user/imageCode.json
    imageCode =  APIEnvi + '/jld-mobile-web/user/imageCode.json' //

    state = {
        visible: false,
        imageKey: true,
        imageCode: '',
        isCodeRight: true, // 图形验证码是否正确
    }

    show = () => {
        this.setState({
            visible: true
        })
    }

    onOk = () => {
        const { imageCode } = this.state

        if (!imageCode) {
            this.setState({
                isCodeRight: false
            })
            return
        }
        // 判断是否正确
        ACTIONS.checkImageCode({
            captcha: imageCode
        }).then(data => {
            if (data.code === 0) {
                this.props.getGraphicCode(imageCode)

                this.setState({
                    visible: false
                })
            } else {
                this.setState({
                    isCodeRight: false,
                    imageKey: !this.state.imageKey,
                    imageCode: ''
                })
            }
        })

    }

    onCancel = () => {
        this.setState({
            visible: false
        })
    }

    // 获取图形验证码
    toGetImageCode = () => {
        this.setState({
            imageKey: !this.state.imageKey
        })
    }

    handleChangeImageCode = (event) => {
        this.setState({
            imageCode: event.target.value
        })
    }

    render() {
        const { visible, imageKey, imageCode, isCodeRight } = this.state
        if (!visible) return null

        return (
            <div className="image-code-win">
                <div className="modal-content">
                    <div className="modal-title">图形验证码</div>
                    <div className="graphic-code">
                        <div className="code-img">
                            {
                                imageKey ? <img src={this.imageCode}/> : null
                            }
                            {
                                !imageKey ? <img src={this.imageCode}/> : null
                            }
                            <span onClick={this.toGetImageCode}>换一张</span>
                        </div>
                        <div className="inp-code">
                            <input value={imageCode} placeholder="请输入图形验证码" onChange={this.handleChangeImageCode} />
                        </div>
                        {isCodeRight ? null : <p className="code-error" style={{color: '#F24454'}}>验证码错误</p>}
                    </div>
                    <footer className="bt">
                        <div className="btn br" onClick={this.onCancel}>取消</div>
                        <div className="btn sure" onClick={this.onOk}>确认</div>
                    </footer>
                </div>
            </div>
        )
    }
}
