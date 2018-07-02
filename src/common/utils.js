export const checkIsTelNum = (tel) => {
    return /^((1[3,5,7,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(tel);
}

// 8-20位数字字母组成的密码
export const checkPassword = (pwd) => {
    return /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{8,20}$/.test(pwd);
}

export const checkIsIOS = () => {
    const u = navigator.userAgent;
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return isiOS;
}

// 4位数字短信验证码
export const checkVerifyCode = (code) => {
    return /^\d{4}$/.test(code)
}

// 获取渠道号
export const getChlFormUrl = () => {
    let url = window.location.href

    if (url.indexOf('?') !== -1) {
        let params = url.split('?');
        const chlArr = params.filter(item => {
            return item.indexOf('chl=') > -1;
        });
        let chl = chlArr[0].split('=')[1]
        return chl
    }

    return ''
}

export const checkPlatform = () => {
    const u = navigator.userAgent;
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) return 'Android';

    if (isIOS) return 'IOS'

    return 'PC';
}