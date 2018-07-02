import './index.less'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class Modal extends Component {
    title = ''

    componentWillReceiveProps(nextProps) {
        const { title, width, onCancel, onOk, onOkText, onCancelText } = nextProps

        if (nextProps.visible && !this.props.visible) {
            let modal = (
                <div className="modal-win">
                    <div className="modal-content" style={{width: width || null}}>
                        <div className="modal-title">{title || this.title}</div>
                        { nextProps.children }
                        <footer className="bt">
                            <div className="btn br" onClick={onCancel}>{onCancelText || '取消'}</div>
                            <div className="btn sure" onClick={onOk}>{onOkText || '确认'}</div>
                        </footer>
                    </div>
                </div>
            )

            ReactDOM.render(modal, document.getElementById('modal'))
        }

        if (this.props.visible && !nextProps.visible) {
            ReactDOM.unmountComponentAtNode(document.getElementById('modal'))
        }
    }

    render() {
        return null
    }
}

Modal.propTypes = {
    title: PropTypes.string,
    width: PropTypes.number,
    visible: PropTypes.bool.isRequired,
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onOkText: PropTypes.string,
    onCancelText: PropTypes.string,
}

export default Modal
