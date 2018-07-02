// 本地开发环境 local
const LOCALAPI = '/api'; //在webpack  devServer中代理开发环境地址来解决跨域问题
// 开发环境  development
const DEVAPI = 'http://192.168.9.170';
// 测试环境  test
const TESTAPI = 'http://192.168.9.101';
// 生产环境  production
const PROAPI = 'https://www.jldloan.com';

console.log('env = ' + process.env.NODE_ENV);

let TOAPI = '';
switch (process.env.NODE_ENV) {
    case 'local':       TOAPI = LOCALAPI;break;
    case 'development': TOAPI = DEVAPI;break;
    case 'test':        TOAPI = TESTAPI;break;
    case 'production':  TOAPI = PROAPI;break;
}

export const APIEnvi = TOAPI;

const API = {
    anroidLastApkAdrr: `${TOAPI}/jld-mobile-admin/appversion/getApkLatestUrl.json`, // 获取最新apk地址

    // spread
    spreadGetMsgCode: `${TOAPI}/jld-mobile-web/channel/sendVerifyCode.json`, // 获取手机短信验证码
    spreadGetImageCode: `${TOAPI}/jld-mobile-web/user/imageCode.json`, // 获取图形验证码
    spreadToRegister: `${TOAPI}/jld-mobile-web/channel/register.json`, // 注册
    spreadAgreement: `${TOAPI}/jld-mobile-web/channel/registerContract.json`, // 协议
    spreadCheckImageCode: `${TOAPI}/jld-mobile-web/channel/verifyCaptcha.json`,


    //creditCard
    creditCard: `${TOAPI}/jld-mobile-wap/market/credit/centrol.json`,
    //loanSupemarket
    loanAdvert: `${TOAPI}/jld-mobile-wap/market/merchant/advert.json`, //贷款超市
}

export default API;
