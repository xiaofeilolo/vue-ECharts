// 首页路由
export default [{
    path: '/',
    name: 'Home',
    component: () => import('../pages/home'),
    children: [{
        // 实时数据
        path: '/realTimeData',
        name: 'RealTimeData',
        component: () => import('../pages/realTimeData/index .vue')
    }, {
        // 数据分析
        path: '/analyseData',
        name: 'AnalyseData',
        component: () => import('../pages/analyseData/index.vue')
    }]
}, ]