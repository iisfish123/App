import API from './../../service/api';
import * as fetch from './../../service/httpService';



// 贷款超市
export const getLoanList = (params = {}) => {
    return fetch.postData(API.loanAdvert, params).then(data => {
        if (data) {
            return data;
        } else {
            console.log('----error');
        }
    })
}
