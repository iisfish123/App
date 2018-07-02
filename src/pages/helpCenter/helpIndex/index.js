import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { navData, topProblemList } from './data';
import arrow from '../../../images/helpCenter/arrow.png';
import goBack from '../../../images/helpCenter/backBtn.png'
import './helpIndex.less';

class HelpIndex extends Component{

    state = {};

    componentDidMount () {
        document.body.style.backgroundColor = '#F5F6F8';
    }

    handleWheel = (event) => {
        console.log('e===>', event);
    };

    render () {
        return (
            <div className={'help-index'}>
                <nav>
                    <div className="navFixed split-line" onWheel={() => this.handleWheel()}>
                        <i className={'go-back'} onClick={() => {window.postMessage('close')}}></i>
                        <h4 className={'title'}>帮助中心</h4>
                        <i></i>
                    </div>
                </nav>
                <header className={'header'}>
                    <div className="guide-banner"><Link to="/helpCenter/guide" /></div>
                    <div>
                        <div className="nav">
                            {
                                navData.map((item, key) => {
                                    return (
                                        <div className={'nav-list'} key={key}>
                                            <Link to={'/helpCenter/problemList/' + item.type}>
                                                <img src={item.imgSrc} alt="icon"/>
                                                <p className="title">{item.title}</p>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </header>
                <main>
                    <h5>热门问题</h5>
                    <div className="split-line"></div>
                    <div className={'hot-list'}>
                        {
                            topProblemList.map((item, key) => {
                                return (
                                    <div key={key}>
                                        <Link className="list-item" to={'/helpCenter/answerDetail/' + item.type + '/' + item.id}>
                                            <h6>{item.title}</h6>
                                            <img src={arrow} alt="more"/>
                                        </Link>
                                        { key < topProblemList.length - 1 ? (<div className="split-line"></div>) : null }
                                    </div>
                                )
                            })
                        }
                    </div>
                </main>
            </div>
        )
    }

}

export default HelpIndex;