import Vue from 'vue'
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

import home from '@/store/home'
import search from "@/store/search";

/*// 存放数据
const state = {}
// 修改state
const mutations = {}
// 书写业务逻辑，也可以处理异步
const actions = {}
// 可理解为计算属性，用于简化仓库数据，让组件获取仓库数据更方便
const getters = {}*/

// 对外暴露Store实例
export default new Vuex.Store({
    modules: {
        home,
        search
    }
})