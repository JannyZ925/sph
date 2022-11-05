// 对API进行统一管理
import requests from "@/api/request";
import mockRequests from "@/api/mockRequests";

// 三级联动接口
// /api/product/getBaseCategoryList get请求，不携带参数
export const reqCategoryList = ()=>requests({url: '/product/getBaseCategoryList',method: 'get'})

// 搜索商品接口
// /api/list post请求 需要参数，参数至少得是一个空对象，否则请求会失败
export const reqSearchResult = (data)=> requests({url: '/list', method: 'post', data})


// mock轮播图数据
export const reqBannerList = ()=>mockRequests({url: '/banner', method: 'get'})
// mock Floor组件的数据
export const reqFloorList = ()=>mockRequests({url: '/floor', method: 'get'})