import HomePage from './homePage/index';
import Register from './register/index';
import Index from './Index/index';
import Wallet from './wallet/index';
import Card from './Card/index';
import Success from './Success/index';
import Password from './password/index';
import Myset from './myset/index';
import Pay from './pay/index';
import Server from './Server/index';

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
    },
    {
        path: '/Password',
        component: Password,
        title: '设置密码',
        level: 1,
    },
    {
        path: '/Myset',
        component: Myset,
        title: '个人设置',
        level: 1,
    },
    {
        path: '/Pay',
        component: Pay,
        title: '收付款',
        level: 1,
    },
    {
        path: '/Server',
        component: Server,
        title: '服务协议',
        level: 1,
    }
]

export default routes;
