import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    //状态管理
    state: {
        num:0
    },
    //修改state
    mutations: {
        setNum(state,params){
            state.num = params
        }
    },
    //异步操作
    actions: {
        setNumAct(context,params){
            let {commit} = context
            commit('setNum',params)
        }
    },    
    //计算属性
    getters:{},
    //模块   
    modules: {}     
})

export default store
