import React, { Component } from 'react';
import { helpCenterList } from '../helpCenterData';
import { Link } from 'react-router-dom';
import goBack from '../../../images/helpCenter/backBtn.png'
import './answerDetail.less';

class AnswerDetail extends Component {

    state = {};

    componentDidMount () {
        document.body.style.backgroundColor = '#fff';
    }

    getPageContent = (id) => {
        let content = {
            title: '',
            content: ''
        };
        helpCenterList.map(item => {
            if (item.id === Number(id)) {
                content.title = item.title;
                content.content = item.content;
            }
        });
        return content;
    };

    render () {

        const { match } = this.props;
        const { params } = match;

        const content = this.getPageContent(params.id);

        return (
            <div className="answerDetail">
                <nav>
                    <div className="navFixed">
                        <div className={'go-back'} onClick={() => {this.props.history.goBack()}} alt="goBack"/>
                    </div>
                </nav>
                <header>
                    <h5 className="margin-left">{content.title}</h5>
                </header>
                <main>
                    {
                        (content.content || []).map((item, key) => {
                            return (
                                <p className="margin-left" key={key}>{item}</p>
                            )
                        })
                    }
                </main>
            </div>
        )
    }

}

export default AnswerDetail;