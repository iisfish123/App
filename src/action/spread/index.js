import API from './../../service/api';
import * as fetch from './../../service/httpService';


// 获取短信
export const getMsgCode = (params = {}) => {
    return fetch.postData(API.spreadGetMsgCode, params).then(data => {
        if (data) {
            return data;
        } else {
            console.log('----error');
        }
    })
}

// 注册接口
export const toRegister = (params = {}) => {
    return fetch.postData(API.spreadToRegister, params).then(data => {
        if (data) {
            return data;
        } else {
            console.log('----error');
        }
    })
}

// 图形验证码
export const getImageCode = () => {
    return fetch.postData(API.spreadGetImageCode).then(data => {
        if (data && data.code === 0) {
            return data.data;
        } else {
            if (data.msg) alert(data.msg)
        }
    })
}

// 获取协议
export const getAgreement = () => {
    return fetch.postData(API.spreadAgreement).then(data => {
        if (data && data.code === 0) {
            return data.data;
        } else {
            if (data.msg) alert(data.msg)
        }
    })
}

//
export const checkImageCode = (params) => {
    return fetch.postData(API.spreadCheckImageCode, params).then(data => {
        return data;
    })
}
