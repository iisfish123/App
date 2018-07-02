import API from './../../service/api';
import * as fetch from './../../service/httpService';

// 获取全部
export const creditCard = (params = {}) => {
    return fetch.postData(API.creditCard, params).then(data => {
        if (data) {
            return data;
        } else {
            console.log('----error');
        }
    })
}