import { checkIsIOS } from './../common/utils';

export const download = () => {
    if (checkIsIOS()) {
        alert('敬请期待');
    } else {
        window.location = 'https://static.jldloan.com/g1/M00/0B/65/oYYBAFsaNaGAMYCfAYuWJz97S-A481.apk'
    }
}
