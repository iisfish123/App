import loanIcon from '../../../images/helpCenter/borrow_related.png';
import loanRightIcon from '../../../images/helpCenter/credit_ralated.png';
import repaymentIcon from '../../../images/helpCenter/refund_related.png';

const navData = [{
    title: '借款相关',
    type: 'loan',
    imgSrc: loanIcon
}, {
    title: '授权相关',
    type: 'loanRight',
    imgSrc: loanRightIcon
}, {
    title: '还款相关',
    type: 'repayment',
    imgSrc: repaymentIcon
}];

const topProblemList = [{
    title: '具备什么资格才能申请借款？',
    id: 1,
    type: 'loan'
}, {
    title: '借款申请流程是怎样的？',
    id: 2,
    type: 'loan'
}, {
    title: '为什么我的审核不通过？',
    id: 8,
    type: 'loanRight'
}, {
    title: '为什么我的银行卡绑定不成功？',
    id: 9,
    type: 'loanRight'
}, {
    title: '如何还款？',
    id: 13,
    type: 'repayment'
}, {
    title: '逾期还款会有怎样的影响？',
    id: 14,
    type: 'repayment'
}];

export { navData, topProblemList };