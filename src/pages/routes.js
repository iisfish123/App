import HomePage from './homePage';
import Register from './register';

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
    }
]

export default routes;
