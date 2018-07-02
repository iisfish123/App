import React, { Component } from 'react';
import './aboutUs.less';

class AboutUs extends Component {
    render() {
        return (
            <div className="aboutUs">
                <ul className="detail-list">
                    <li>
                        <h4 className="aboutUs-title bg-arrow">公司介绍</h4>
                        <p className="foot-content">深圳市融投天下互联网金融服务有限公司（简称融投天下）成立于2015年2月，是一家技术驱动的Fintech公司，专注人工智能风控和金融大数据研发，为不同群体提供高效便捷的智能金融服务和解决方案。</p>
                        <p className="foot-content top-p">我们秉承着“科技改变金融”的使命，吸引大量优秀的研发人员和风控专家的加入。未来，融投天下将联合海量合作伙伴，通过输出自身平台积累的AI风控能力，与各流量方、资金方达成深层次合作，探索多领域产业和布局，共同打造微金融生态平台，实现金融服务的智能化、个性化和定制化，提高金融科技产品的发展创新和效率，进一步促进金融服务更加普惠、更加合规、更加安全、更加高效。</p>
                        <p className="foot-content top-p">借立得为融投天下旗下推出的一款个人消费信贷产品，通过大数据及AI风控能力自动识别信用风险，为授信人群提供借款服务。</p>
                    </li>
                    <li>
                        <h4 className="aboutUs-title bg-arrow">联系我们</h4>
                        <p className="foot-content">联系地址：深圳市南山区创业路1777号海信南方大厦17楼</p>
                        <p className="foot-content">客服电话：0755-28803688</p>
                    </li>
                    <li>
                        <h4 className="aboutUs-title bg-arrow">商务合作</h4>
                        <p className="foot-content">邮箱：market@jldloan.com</p>
                    </li>
                </ul>
                <div className="hr"></div>
            </div>
        )
    }
}

export default AboutUs;
