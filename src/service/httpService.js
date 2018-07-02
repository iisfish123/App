import axios from 'axios';
import qs from 'qs';

export const getData = (url, options = {}) => {
    return axios.get(url, {
        params: options
    }).then(res => {
        return res.data
    }).catch(err => {
        console.log(err);
    })
}

export const postData = (url, params = {}) => {
    return axios.post(url, JSON.stringify(params), {
        'headers': {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }).then(res => {
        return res.data
    }).catch(err => {
        console.log(err);
    })
}
