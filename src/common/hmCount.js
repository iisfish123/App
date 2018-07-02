/**
 * 百度行为统计、、
 * @param category  -> String  --> 要监控的目标的类型名称;
 * @param action  -> String  --> 用户跟网页进行交互的动作名称;
 * @param opt_label  -> String  --> 事件的一些额外信息;
 * @param opt_value  -> Number  --> 跟事件相关的数值;
 */
export default ({category, action = 'click', opt_label, opt_value}) => {
    const _hmt = window._hmt || [];
    _hmt.push(['_trackEvent', category, action, opt_label, opt_value]);
}

// egs: (action可不传，默认为click,opt_value也可不传);
// import hmCount from '[yourpath]/hmCount';
// hmCount({category: 'spread/one', opt_label: '立即登录'});