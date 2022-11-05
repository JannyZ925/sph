import Vue from 'vue'
import VueRouter from "vue-router";

import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {showFooter: true}
        },
        {
            name: 'search',
            // 如果路由要求传递params参数，但跳转时没有传递，URL会出现问题
            // 如何指定params参数可传可不传：配置路由时，在占位的后面加上?即可，如'/search/:keyword?'
            path: '/search/:keyword?',
            component: Search,
            meta: {showFooter: true}
        },
        {
            path: '/login',
            component: Login,
            meta: {showFooter: false}
        },
        {
            path: '/register',
            component: Register,
            meta: {showFooter: false}
        },

        // 重定向：运行项目时，访问/立即定位到首页
        {
            path: '/',
            redirect: '/home'
        }
    ]
})


// 将VueRouter原型对象的push和replace备份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
/*
    重写push|replace
    参数：
      location 告诉原来的push方法，往哪里跳转
      resolve 成功的回调
      reject 失败的回调
*/
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        /*call 和apply 的区别
        相同点：都可以调用函数、篡改上下文
        不同点：call传递参数用逗号隔开，apply传递参数用数组传递
        这里如果直接写originPush(location, resolve, reject)，上下文对象为window，要将上下文对象改为VueRouter的实例对象*/
        originPush.call(this, location, resolve, reject)
    } else if (resolve) {
        originPush.call(this, location, resolve, () => {})
    } else if (reject) {
        originPush.call(this, location, () => {}, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else if (resolve) {
        originReplace.call(this, location, resolve, () => {})
    } else if (reject) {
        originReplace.call(this, location, () => {}, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}
