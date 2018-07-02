import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './index.less';
import loading from './../../../images/loanSupermarket/loading.png';
import hmCount from './../../../common/hmCount';
import * as ACTIONS from './../../../action/loanSupermarket';
import { checkPlatform } from './../../../common/utils';

class OSType {
	static AndroidH5 = 'android-h5';
	static iOSH5 = 'ios-h5';
	static PCH5 = 'pc-h5';
}

class LoanSupermarketList extends Component {

    state = {
        loanListData : [], // 列表
        pageNum : 1, // 默认第一页
        isLoadingMore : true, // 加载更多
        nowLoading : false, // 加载状态
        InallNum : 0, // 总页数
    };

    componentDidMount() {
        const onLoadMore = this.onLoadMore;
        let timeCount;
        this.loanList(this.state.pageNum);
        window.addEventListener('scroll', function () {
            if (this.state.InallNum <= 1) {
                return ;
            }
            if (!this.state.isLoadingMore) {
                return ;
            }
            if (this.state.nowLoading) {
                return ;
            }
            if (timeCount) {
                clearTimeout(timeCount);
            }
            timeCount = setTimeout(onLoadMore, 800);
        }.bind(this), false);
	}

    //加载更多
    onLoadMore = () => {
        let pageNum = this.state.pageNum + 1;
        const wrapper = this.refs.wrapper;
        const top = wrapper.getBoundingClientRect().top;
        const windowHeight = window.screen.height;
        const loanList = this.loanList;
        if (pageNum > this.state.InallNum) {
            this.setState({
                isLoadingMore : false
            })
            return;
        }
        if (top < windowHeight && pageNum <= this.state.InallNum) {
            // 当 wrapper 已经被滚动到页面可视范围之内触发
            loanList(pageNum);
        }
        this.setState({
            pageNum: pageNum
        });
        
    }


    // 列表加载
    loanList = (pageNo = 1) => {
        let params = {
            ostype : checkPlatform() === 'IOS' ? OSType.iOSH5 : (checkPlatform() === 'Android' ? OSType.AndroidH5 : OSType.PCH5),
            channel : 'JLD-H5-GW',
            currentTime : new Date().getTime()
        }
        this.setState({
            nowLoading : true
        })
        ACTIONS.getLoanList({
            checksum: '',
            currentTime : params.currentTime,
            data: JSON.stringify({
                ostype : params.ostype,
                channel : params.channel,
                pageNo : pageNo
            })
        })
        .then(data => {
            console.log(data);
            let listData = data.data.data; // 当页的数组
            let pages = data.data.totalCount % 7 === 0 ? data.data.totalCount/7 : (parseInt(data.data.totalCount/7) + 1) // 总页数
            let newListData = this.state.loanListData.concat(listData); 
            if (data && data.code === 0) {
                this.setState({
                    loanListData : newListData,
                    nowLoading : false,
                    InallNum : pages
                })
            } else {
                alert(data.msg);
                this.props.hidePageLoading();
                return;
            }
        })
    }

    render () {
        const {
            loanListData,
            isLoadingMore,
            InallNum
        } = this.state;
        
        let loanList = loanListData.map((item, index) => (
            <li className="loanLi" key={index}>
                <div className="box">
                    <div className="boxLeft">
                        <div className="appIcon">
                            <img src={item.appIcon} />
                        </div>
                        <p>{item.appName}</p>
                    </div>
                    <div className="loanCenter">  
                        <p className="loanMoney">{item.borrowScope}</p>
                        <p className="loanTime">{item.borrowDesc}</p>
                    </div>
                    <div className="loanRight">
                        <a href={item.appUrl}>{item.buttonTitle}</a>
                    </div>
                </div>
            </li>
        ))

        return (
            <div className = "loan-list">
                <ul>
                    {loanList}
                </ul>
                {
                    InallNum > 1 ?  (<div className="load-more" ref="wrapper">
                                        { isLoadingMore ? <img className="loading" src={ loading } alt="loading..."/>: '没有更多啦' }
                                    </div>) : null
                }
                {/* <div className="server">- 借立得竭诚为您服务 -</div> */}
            </div>
        )
    }
}

export default LoanSupermarketList;