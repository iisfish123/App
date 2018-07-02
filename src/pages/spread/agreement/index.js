import React, { Component } from 'react'
import * as ACTIONS from './../../../action/spread'

export default class Agreement extends Component {
    state = {
        htmlString: '', // 协议内容
    }
    componentDidMount() {
        ACTIONS.getAgreement().then(res => {
            let arr = res.htmlString.split('body>')
            let html = arr[1].substring(0, arr[1].length - 2)
            this.setState({
                htmlString: html
            })
        })
    }
    render() {
        const { htmlString } = this.state
        return (
            <div style={{background: '#fff', fontSize: 0}} dangerouslySetInnerHTML={{__html: htmlString}}></div>
        )
    }
}
