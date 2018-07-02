import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { helpCenterList, navList } from '../helpCenterData';
import arrow from '../../../images/helpCenter/arrow.png';
import goBack from '../../../images/helpCenter/backBtn.png'
import './problemList.less';

class ProblemList extends Component {

    state = {};

    componentDidMount () {
        document.body.style.backgroundColor = '#fff';
    }

    getPageList = (type) => {
        let listData = [];
        helpCenterList.map(item => {
            if (item.type === type) {
                listData.push(item);
            }
        });
        return listData;
    };

    render () {

        const { match: { params } } = this.props;
        const listData = this.getPageList(params.nav);
        return (
            <div className="problem">
                <nav>
                    <div className="navFixed">
                        <div className={'go-back'} onClick={() => {this.props.history.goBack()}} alt="goBack"/>
                    </div>
                </nav>
                <header className="margin-left">
                    <h5>{navList[params.nav]}</h5>
                    <div className="split-line"></div>
                </header>
                <div className="margin-left">
                    {
                        (listData || []).map(item => {
                            return (
                                <div key={item.id}>
                                    <Link className="list-item" key={item.id} to={'/helpCenter/answerDetail/' + item.type + '/' + item.id}>
                                        <h6>{item.title}</h6>
                                        <img src={arrow} alt="详情"/>
                                    </Link>
                                    <div className="split-line"></div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default ProblemList;