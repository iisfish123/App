// 本地开发环境 local
const LOCALAPI = '/api'; //在webpack  devServer中代理开发环境地址来解决跨域问题
// 开发环境  development
const DEVAPI = '';
// 测试环境  test
const TESTAPI = '';
// 生产环境  production
const PROAPI = '';

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
    anroidLastApkAdrr: `${TOAPI}/haha`, // 获取最新apk地址
}

export default API;
