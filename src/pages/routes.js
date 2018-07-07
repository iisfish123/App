import HomePage from './homePage/index';
import Register from './register/index';
import Index from './Index/index';
import Wallet from './wallet/index';
import Card from './Card/index';
import Success from './Success/index';

// level 1：表示1级路由， 2：表示2级路由
const routes = [
    {
        path: '/homePage',
        component: HomePage,
        title: '官网首页',
        level: 1,
    },
    {
        path: '/Register',
        component: Register,
        title: '注册页面',
        level: 1,
    },
    {
        path: '/Index',
        component: Index,
        title: '首页',
        level: 1,
    },
    {
        path: '/Wallet/:id',
        component: Wallet,
        title: '钱包',
        level: 1,
    },
    {
        path: '/Card',
        component: Card,
        title: '绑定银行卡',
        level: 1,
    },
    {
        path: '/Success',
        component: Success,
        title: '绑定银行卡',
        level: 1,
    }
]

export default routes;
